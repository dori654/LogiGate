const express = require("express");
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");

const userModel = require("../models/user");

var db = mongoose.connection;

router.post("/Register", (req, res) => {
    //find duplicate ID
    userModel.findOne({ user_id: req.body.ID }, (err, user) => {
        if (err)
            console.log(err);
        else {
            if (user)
                return res.render('message', { message: "ID already exists" });
            else {
                const user = new userModel({
                    name: req.body.f_name,
                    email: req.body.email,
                    user_id: req.body.ID,
                    password: req.body.password,
                    phone: req.body.phone,
                    role: req.body.role
                });
                user.save();
                db.collection("Users").insertOne(user);
                res.render("message", { message: "Registration Successful" });
            }
        }
    });
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