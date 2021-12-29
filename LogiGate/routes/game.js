var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var session = require('express-session');
var controller = require("../controller/game_controller");

router.get("/Rate", controller.rate);
router.get("/Game", controller.game);
module.exports = router;
