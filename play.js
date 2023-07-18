// Import required functions
const { connect } = require("./client");
const { setupInput } = require("./input");

// Call setupInput function with connection function passed into it.
setupInput(connect());