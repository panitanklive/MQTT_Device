module.exports = function() {
  switch (process.env.NODE_ENV) {
    case "dev":
      return {
        url: "http://104.215.191.117",
        account : {username : "admin" , password : "admin" },
        name: "development",
      };

     case "staging": 
      return {
        url: "http://13.67.66.157",
        account : {username : "user-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmZiYTJmZTRmYTg3NDAwYzdjMTkyZmIiLCJpYXQiOjE1NDMyMTgxNjUsImV4cCI6MTU0MzMwNDU2NX0.duNj2Wvl4HDXDWbpn6VlUnnwKOBNNUsNtqCK81_-xp0" , password : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YmZiYTJmZTRmYTg3NDAwYzdjMTkyZmIiLCJpYXQiOjE1NDMyMTgxNjUsImV4cCI6MTU0MzMwNDU2NX0.duNj2Wvl4HDXDWbpn6VlUnnwKOBNNUsNtqCK81_-xp0" },
        name: "staging",
      };

    default:
      return {
        url: "http://104.215.191.117",
        account : {username : "admin" , password : "admin" },
        name: "default"
      };
  }
};
