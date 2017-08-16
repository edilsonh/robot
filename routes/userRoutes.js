const express = require("express");
const router = express.Router();
const Robot = require("../models/data");

router.get("/:id", (req, res) => {
  //let foundUser = Robot.getUserByUsername(req.params.id);
  //res.render("robot", {user: foundUser})
})

module.exports = router;
