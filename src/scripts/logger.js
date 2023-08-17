const { green, red } = require("chalk");

function logMessage(message) {
  console.log(green(`${new Date().toJSON()} ${message}`));
}

function logError(message) {
  console.log(red(`${new Date().toJSON()} ${message}`));
}

module.exports = {
  logMessage,
  logError,
};
