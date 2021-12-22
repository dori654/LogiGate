const express = require("express");
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");

const userModel = require("../models/user");

var db = mongoose.connection;

router.post("/Register", (req, res) => {
    db.collection("Users").findOne({ id: req.body.ID }, (err, obj) => {
        if (obj) return res.status(400).send("User already exists");
    });
    const user = new userModel({
        name: req.body.f_name,
        email: req.body.email,
        id: req.body.ID,
        password: req.body.password,
        phone: req.body.phone,
        role: req.body.role
    });
    user.save();
    db.collection("Users").insertOne(user);
    res.render("signup_success");
});

router.post("/Login", (req, res) => {
    var id = req.body.id;
    var password = req.body.password;
    var pass;

    db.collection("dashboard_s").findone(
        {
            ID: id
        },
        (err, collection) => {
            if (err) {
                throw err;
            }

            pass = collection.password;
            console.log(pass);
            console.log(password);
            console.log("Record found Successfully");
            if (pass === password) {
                res.render("login_success");
            } else {
                res.render("unsuccess");
            }
        }
    );
});


module.exports = router;