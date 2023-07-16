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

  // Events that will occur upon connection
  conn.on("connect", () => {
    // Prints user name on the game logs a successfully connection
    console.log("Successfully connected to game server");
    conn.write(`Name: ${playerName}`);

    // The game server timeout when idle for 10 sec
    conn.setTimeout(10000);
    conn.on('timeout', () => {
      console.log('you ded cuz you idled');
      conn.end();
      console.log("start all over");
      process.exit();
    });
  });

  return conn;
};

module.exports = {
  connect
};