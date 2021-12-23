var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
var session = require('express-session');
var logger = require('../models/log');

router.get('/', function (req, res) {
    logger.findOne({ user_id: req.session.user_id }, function (err, data) {
        if (data) {
            //TODO: add a new action to the log
        }
    });
});

module.exports = router;