const express = require("express");
const server = express();
const { port, start } = require("./modules/server");

server.listen(port, start());

const { join } = require("path");
const statics = require("./modules/static");

server.use(statics(join(__dirname, "../public")));

server.use(require("./routes/products.routes.js"));

server.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/index.html"));
});
server.get("/register", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/register.html"));
});
server.get("/login", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/login.html"));
});
