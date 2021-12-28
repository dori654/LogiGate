const express = require("express");
const router = express.Router();
const path = require("path");
const controller = require("../controller/database_controller");
const handler = require("../utils/handler")

//database routes
router.post("/Register", handler.catchErrors(controller.register));
router.post('/Login', handler.catchErrors(controller.login));
router.get('/signoff', handler.catchErrors(controller.signoff));
router.get('/Rate', handler.catchErrors(controller.rate));



module.exports = router;