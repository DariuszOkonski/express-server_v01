const fs = require("fs");
const path = require("path");

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  async save() {
    const filePath = path.join(__dirname, "..", "data", "products.json");
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

    let products = [];
    try {
      const fileContent = await fs.promises.readFile(filePath, "utf8");
      products = JSON.parse(fileContent);
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }

    products.push(this);
    await fs.promises.writeFile(filePath, JSON.stringify(products));
  }

  static async fetchAll() {
    const filePath = path.join(__dirname, "..", "data", "products.json");
    try {
      const fileContent = await fs.promises.readFile(filePath, "utf8");
      return JSON.parse(fileContent);
    } catch (err) {
      if (err.code === "ENOENT") {
        return [];
      }
      throw err;
    }
  }
};
