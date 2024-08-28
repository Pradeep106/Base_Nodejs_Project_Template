const express = require("express");

const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");
const { AboutController, HomeController } = require("./controllers");

const app = express();

app.listen(ServerConfig.PORT, () => {
  console.log(`Successfully started the server on PORT:${ServerConfig.PORT}`);
});
