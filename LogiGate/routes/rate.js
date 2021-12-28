var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var session = require('express-session');
var controller = require("../controller/rate_controller");

router.get("/Rate", controller.rate);

module.exports = router;
