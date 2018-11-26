const mqtt = require("mqtt");
const express = require("express")
const app = express();
const http = require("http")
const path = require("path");
const Config = require(path.resolve("config/conf.js"));
const env = new Config();
const port = 7777;

app.use(express.static("./"));
app.use("*", function(req, res, next) {
  var indexFile = path.resolve(__dirname,"./angular/index.html");
  res.sendFile(indexFile);
});

var httpsServer = http.createServer(app);
httpsServer.listen(port, function() {
  console.log(`Server start at port ${port}.`);
});


var options = {
  port: 1883,
  clientId:
    "mqttjs_" +
    Math.random()
      .toString(16)
      .substr(2, 8),
  username: env.account.username,
  password: env.account.password
};

var client = mqtt.connect(
  env.url,
  options
);

var token = "5d2346e0-f154-11e8-b2a1-e736986ca34f"
var battery =  0
var light = 0
var Temp = 0.00
client.on("connect", function() {    

});

start(0);
function start(counter){
    // if(counter < 100){  
      setTimeout(()=>{
        Temp =  (Math.random() * (40.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        counter =  (Math.random() * (99.00 - 1.00 + 1.00) + 1.00).toFixed(2)
        //battery = (Math.random() * (100 - 1 + 1) + 1).toFixed(0)
        if(battery > 100){
          battery = 0
        }
        if(light == 0){
          light = 1
        }else{
          light = 0
        }
        battery++
        let message = `{"DeviceId": "${token}","Sensors":[{"Name":"Temperature","Data":"${Temp}"},{"Name":"Toggle","Data":"${light}"},{"Name":"Humidity","Data":"${counter}"},{"Name":"Battery mVolt","Data":"${battery}"}]}`;
        client.publish(`monitor/${token}`, message, function() {
            let data = JSON.parse(message)
            console.log(data.Sensors)
        });
        start(counter);
      }, 3000);
    // }
}

