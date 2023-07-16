// Import the command line object from constants file
const { cmdLineObject } = require('./constants');

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from standard keyboard input (stdin)
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// Callback function to setupInput that accepts keyboard input from client
const handleUserInput = function(key) {
  // bind movement commands to W A S D keys and send commands to game server
  if (cmdLineObject[key]) {
    connection.write(cmdLineObject[key]);
  }
  
  /// Terminate the game with ctrl+c
  if (key === "\u0003") {
    console.log("Game terminated!");
    process.exit();
  }
};

module.exports = {
  setupInput
};