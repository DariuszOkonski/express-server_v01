const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRouters = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRouters);

app.use((req, res) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
  console.log("Server is Listening on port 3000...");
});
