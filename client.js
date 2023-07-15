const { log } = require("console");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // IP address here,
    port: 50541,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    console.log('Name: EUS');

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 1000);
    
  });

  return conn;
};
connect();

module.exports = {
  connect
};