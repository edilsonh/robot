const express = require("express");
const app = express();
const path = require("path");
const mustacheExpress = require("mustache-express");
const fs = require("fs");
const User = require("./models/data");
const userRoutes = require("./routes/userRoutes");
const homeRoute = require("./routes/homeRoute");

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));
app.set("port", 3000);

app.use("/public", express.static(path.join(__dirname, "public")));

app.use(homeRoute);
app.use(userRoutes);

const dbClient = require("./dbConnection");
dbClient.connect((client) => {
  app.listen(app.get("port"), err => {
      if(err) {
        throw err;
        exit(1);
      }

      console.log(
        `Node running in ${app.get("env")} mode @ http://localhost:${app.get("port")}`);
    })
  })
