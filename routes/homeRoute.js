const express = require("express");
const router = express.Router();
const Robots = require("../models/data");

router.get("/", (req, res) => {
  Robots.findAll((data) => {
    res.render("index", { users: data });
  })
});

router.get("/employed", (req, res) => {
  Robots.findAllEmployed((data) => {
    res.render("index", { users: data})
  })
});

router.get("/notEmployed", (req, res) => {
  Robots.findAllUnemployed((data) => {
    res.render("index", { users: data})
  })
});

module.exports = router;
