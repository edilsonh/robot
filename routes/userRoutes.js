const express = require("express");
const router = express.Router();
const Robot = require("../models/data");

router.get("/:id", (req, res) => {
  Robot.getByUsername((req.params.id), (data) => {
    res.render("robot", {user:data})
  });
})

module.exports = router;
