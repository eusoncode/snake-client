// Define the useful input data and export them
const IP = 'localhost';
const PORT = 50541;
const playerName = process.argv.slice(2);
const cmdLineObject = {
  "w": "Move: up",
  "a": "Move: left",
  "s": "Move: down",
  "d": "Move: right",
  "t": "Say: Hey Player2"
};

module.exports = {
  IP,
  PORT,
  playerName,
  cmdLineObject
};