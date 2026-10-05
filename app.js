const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the middleware!");

  next();
});

app.use((req, res, next) => {
  console.log("Another middleware");

  res.send("<h1>Hello From Express</h1>");
});

app.listen(3000, () => {
  console.log("Server is Listening on port 3000...");
});
