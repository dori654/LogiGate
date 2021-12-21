const express = require("express");
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");

const userModel = require("../models/user");

var db = mongoose.connection;

router.post("/Register", (req, res) => {
    const user = new userModel(req.body.name, req.body.email, req.body.id, req.body.password, req.body.phone, req.body.role);
    user.save();
    //TODO: User save unfinished
    if (role == "Student") {
        db.collection("dashboard_s").insertOne(data, (err, collection) => {
            if (err) {
                throw err;
            }
            console.log("Record Inserted Successfully");
        });
    }
    else if (role == "Teacher") {
        db.collection("dashboard_t").insertOne(data, (err, collection) => {
            if (err) {
                throw err;
            }
            console.log("Record Inserted Successfully");
        });
    }
    else if (role == "Director") {
        db.collection("dashboard_d").insertOne(data, (err, collection) => {
            if (err) {
                throw err;
            }
            console.log("Record Inserted Successfully");
        });
    }

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