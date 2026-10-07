const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRouters = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRouters);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Server is Listening on port 3000...");
});

// module.exports = path.dirname(require.main.filename)
