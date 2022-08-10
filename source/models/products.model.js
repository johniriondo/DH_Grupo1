const { resolve } = require("path");
const fs = require("fs");

let model = {
  all: function () {
    let file = resolve(__dirname, "../data", "products.json");
    let data = fs.readFileSync(file);
    return JSON.parse(data);
  },
  one: function (sku) {
    let all = model.all();
    return all.find((e) => e.sku == sku);
  },
  generate: function (data) {
    let all = model.all();
    let last = all.pop();
    let product = {};
    product.name = data.service;
    product.price = parseInt(data.price);
    product.detail = data.detail;
    product.location = data.location;
    product.availability = data.availability;
    product.category = data.category;
    product.homeservice = data.homeservice;
    product.cost = parseInt(data.cost);
    product.sku = last.sku + 1;
    return product;
  },
  write: function (data) {
    let file = resolve(__dirname, "../data", "products.json");
    let json = JSON.stringify(data, null, 2);
    return fs.writeFileSync(file, json);
  },
};

module.exports = model;
