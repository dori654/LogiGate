var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

router.get("/dashboard", function (req, res) {
  res.render("dashboard", {
    title: "Dashboard",
    layout: "dashboard_layout",
  });
});

module.exports = router;
