const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const expressHbs = require("express-handlebars");

const app = express();

app.engine(
  "hbs",
  expressHbs.engine({
    layoutsDir: path.join(__dirname, "views", "layouts"),
    defaultLayout: "main-layout",
    extname: ".hbs",
  }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

const adminData = require("./routes/admin");
const shopRouters = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRouters);

app.use((req, res) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000, () => {
  console.log("Server is Listening on port 3000...");
});

// module.exports = path.dirname(require.main.filename)
