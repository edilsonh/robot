const express = require("express");
const app = express();
const path = require("path");
const mustacheExpress = require("mustache-express");

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

app.get("/", function(req, res) {
  res.render("index.html");
});

app.listen(3000);
