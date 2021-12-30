var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var session = require('express-session');
var controller = require("../controller/index_controller");




//Routes
router.get("/", controller.homepage);
router.get("/Login", controller.login);
router.get("/Register", controller.register);
router.get("/Game", controller.game);
router.get("/Chat", controller.chat);
router.get("/Rate", controller.rate);
router.get("/Tutorial", controller.tutorial);



// router.get("/:any", controller.any);

module.exports = router;
