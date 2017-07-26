const express = require("express");
const app = express();
const path = require("path");
const mustacheExpress = require("mustache-express");
const DATA = require("./views/data")

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

app.get("/", function(req, res) {
  res.render("index.mustache", DATA);
});

app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/:username", function(req, res) {
  let foundRobot = DATA.users.find(robo =>
    robo.username === req.params.username
  );
  res.render("robot.mustache", foundRobot);
});

app.listen(3000);
