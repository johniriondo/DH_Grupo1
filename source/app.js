const express = require("express");
const server = express();
const { port, start } = require("./modules/server");
const { join } = require("path");
server.listen(port, start()); 
server.set('views', join(__dirname,'./views')); //le decimos que de esta carpeta vamos a sacarf las vistas.
server.set('view engine', 'ejs'); //le decimos que motor de plantillas vamos a usar.



const statics = require("./modules/static");

server.use(statics(join(__dirname, "../public")));

server.use(require("./routes/products.routes.js"));

server.get("/", (req, res) => {
  return res.sendFile(join(__dirname, "/views/index.html"));
});
server.get("/productCart", (req, res) => {
  return res.sendFile(join(__dirname, "/views/productCart.html"));
});
server.get("/productDetail", (req, res) => {
  return res.sendFile(join(__dirname, "/views/productDetail.html"));
});
server.get("/register", (req, res) => {
  return res.sendFile(join(__dirname, "/views/register.html"));
});
server.get("/login", (req, res) => {
  return res.sendFile(join(__dirname, "/views/login.html"));
});
