const { Logger } = require("winston");
const serverConfig = require("./server-config");

module.exports = {
  ServerConfig: require("./server-config"),
  Logger: require("./logger-config"),
};
