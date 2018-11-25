var mqtt = require("mqtt");
var options = {
  port: 1883,
  clientId:
    "mqttjs_" +
    Math.random()
      .toString(16)
      .substr(2, 8),
  username: "admin",
  password: "admin"
};

var client = mqtt.connect(
  "http://104.215.191.117",
  options
);

var token = "bcbbb312-e7d8-11e8-837e-19492b01a1d3"

client.on("connect", function() {    

});

start(0);
function start(counter){
    // if(counter < 100){  
      setTimeout(()=>{
        counter =  (Math.random() * (99.99 - 1.00 + 1.00) + 1.00).toFixed(2);
        let message = `{"DeviceId": "${token}","Sensors":[{"Name":"Humidity","Data":"${counter}"}]}`;
        client.publish(`monitor/${token}`, message, function() {
            let data = JSON.parse(message)
            console.log(data.Sensors)
        });
        start(counter);
      }, 5000);
    // }
  }
