var express = require("express");
var router = express.Router();
var userDB = require("../models/user");

router.get("/dashboard", function (req, res) {

  userDB.find({}, function (err, foundUser) {
    res.render("dashboard", {
      title: "Dashboard",
      layout: "dashboard_layout",
      students: foundUser
    });
  });
});

router.get("/remove/:_id", function (req, res) {
  userDB.findById(req.params._id, function (err, foundUser) {
    userDB.deleteOne(foundUser, function (err) {
      if (err) {
        console.log(err);
      }
    });
    res.redirect(req.get('referer'));
  });
});
module.exports = router;
