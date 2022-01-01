var express = require("express");
var router = express.Router();
const controller = require("../controller/rooms_controller");


router.post("/create", controller.create);
router.post("/edit/:_id", controller.edit);
router.get("/remove/:_id", controller.remove);


module.exports = router;