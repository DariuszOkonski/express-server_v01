const Product = require("../models/product.js");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.postAddProduct = async (req, res, next) => {
  const product = new Product(req.body.title);
  await product.save();

  res.redirect("/");
};

exports.getProducts = async (req, res, next) => {
  const products = await Product.fetchAll();

  res.render("admin/products", {
    prods: products,
    pageTitle: "Admin Products",
    path: "/admin/products",
  });
};
