var express = require("express");
var router = express.Router();
const controller = require("../controller/dashboard_controller");


//dashboard routers
router.get("/dashboard", controller.dashboard);
router.get("/remove/:_id", controller.remove);
router.get("/edit/:_id", controller.edit);
router.get("/export", controller.export);
router.get("/analytics", controller.analytics);
router.get("/reports/:user_id", controller.reports);
router.get("/rooms", controller.rooms);
router.get("/news", controller.news);

router.post("/edit/:_id", controller.edit_post);
router.post("/send", controller.send);
router.post("/send_push", controller.send_push);
router.post("/export_send", controller.export_send);

module.exports = router;
