var express = require("express");
var router = express.Router();

var controller = require("../controller/logger_controller");

//Routes
router.use(controller.logger);

module.exports = router;