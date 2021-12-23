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

router.get("/edit/:_id", function (req, res) {
  if (!req.body) {
    res.status(400).render('message', { message: 'Data to Update Can Not Be Empty' });
    return;
  }

  const id = req.params._id;
  userDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).render('message', {
          message: `Cannot Update user with id ${id} , Maybe User Not Found`,
        });
      } else {
        //make the edit page here
        res.render('message', { message: "Edit page does not exist" });
      }
    })
    .catch((err) => {
      res.status(500).render('message', {
        message: err.message || 'Error Update User Information',
      });
    });
});
module.exports = router;
