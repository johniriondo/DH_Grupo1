const express = require("express");
const { join } = require("path");
const methodOverride = require("method-override");
const server = express();
const { port, start } = require("./modules/server");
server.listen(port, start());

server.set("views", join(__dirname, "./views"));
server.set("view engine", "ejs");

const statics = require("./modules/static");
server.use(statics(join(__dirname, "../public")));

server.use(express.urlencoded({ extended: true }));

server.use(methodOverride("m"));

server.use(require("./routes/products.routes"));

// ¿¿¿ ???

server.get("/", (req, res) => {
  return res.render(join(__dirname, "/views/index.ejs"));
});
server.get("/productCart", (req, res) => {
  return res.render(join(__dirname, "/views/productCart.ejs"));
});
server.get("/productDetail", (req, res) => {
  return res.render(join(__dirname, "/views/productDetail.ejs"));
});
server.get("/register", (req, res) => {
  return res.render(join(__dirname, "/views/register.ejs"));
});
server.get("/login", (req, res) => {
  return res.render(join(__dirname, "/views/login.ejs"));
});
