const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const adminData = require("./routes/admin");
const shopRouters = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRouters);

app.use((req, res) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    path: req.path,
  });
});

app.listen(3000, () => {
  console.log("Server is Listening on port 3000...");
});
