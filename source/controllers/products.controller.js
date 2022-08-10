const { all, one, generate, write } = require("../models/products.model");

const controller = {
  index: (req, res) => {
    let products = all();

    if (req.params.categoria) {
      products = products.filter((e) => e.category == req.params.categoria);
      return res.render("list", { products });
    }

    return res.render("list", { products });
  },
  show: (req, res) => {
    let product = one(req.params.producto);
    if (product) {
      return res.render("detail", { product });
    }
    return res.render("detail", { product: null });
  },
  create: (req, res) => {
    return res.render("create");
  },
  save: (req, res) => {
    let nuevo = generate(req.body);
    let todos = all();
    todos.push(nuevo);
    write(todos);
    return res.redirect("/productos/");
  },
  edit: (req, res) => {
    let product = one(req.params.producto);
    return res.render("edit", { product });
  },
  update: (req, res) => {
    let todos = all();
    let actualizados = todos.map((element) => {
      if (element.sku == req.body.sku) {
        element.service = req.body.service;
        element.price = parseInt(req.body.price);
        element.detail = req.body.detail;
        element.location = req.body.location;
        element.availability = req.body.availability;
        element.category = req.body.category;
        element.homeservice = req.body.homeservice;
        element.cost = parseInt(req.body.cost);
      }
      return element;
    });
    write(actualizados);
    return res.redirect("/productos");
  },
};

module.exports = controller;
