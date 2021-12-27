const mongoose = require("mongoose");
var session = require('express-session');
var logger = require('../models/log');

module.exports.logger = (req, res, next) => {
    logger.findOneAndUpdate({ user_id: req.session.user_id }, {
        $push: { activity: req.path + " at: " + new Date().toISOString() }
    }, function (err, doc) {
        if (err) {
            console.log(err);
        } else if (doc != null) {
            try {
                if (doc.activity.length > 100) {
                    //delete first item
                    logger.findOneAndUpdate({ user_id: req.session.user_id },
                        { $pop: { activity: -1 } });
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    });
    next();
}
