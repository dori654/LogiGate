var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var session = require('express-session');

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express", user: req.session.username });
});

router.get("/Login", function (req, res) {
  res.render("login", {
    title: "Login page",
  });
});

router.get("/Register", function (req, res) {
  res.render("register");
});

router.get("/Game", function (req, res) {
  res.render("game");
});
module.exports = router;
