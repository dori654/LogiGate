const mongoose = require("mongoose");
const session = require('express-session');
var db = mongoose.connection;

module.exports.rate = async (req, res) => {
    await res.render("rate");
}

var Rater = require('../models/rat');

module.exports.Rater = (req, res, next) => {
    Rater.findOneAndUpdate({ user_id: req.session.user_id }, {
        $push: { activity: req.path + " at: " + new Date().toISOString() }
    }, function (err, doc) {
        if (err) {
            console.log(err);
        } else if (doc != null) {
            try {
                if (doc.activity.length > 100) {
                    //delete first item
                    Rater.findOneAndUpdate({ user_id: req.session.user_id },
                        { $pop: { activity: -1 } });
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    });
    
}
