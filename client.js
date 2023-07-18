// Import required functions
const net = require("net");
const { IP, PORT, playerName } = require("./constants");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Events that will occur upon receiving data
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // Events that will occur upon connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server.");
    conn.write(`Name: ${playerName}`);
  });

  return conn;
};

module.exports = {
  connect
};