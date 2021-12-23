const express = require("express");
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose");
const session = require('express-session');
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

router.post('/Login', (request, response) => {
    var username = request.body.ID;
    var pass = request.body.password;
    if (username && pass) {
        userModel.findOne({ user_id: request.body.ID, password: pass }, (err, data) => {
            if (data) {
                request.session.loggedin = true;
                request.session.username = data.name;
                console.log(request.session.username);
                response.render("message", { message: "Login Successful" });
            } else {
                response.render("message", { message: "Login Unsuccessful" });
            }
        });
    } else {
        response.render('message', { message: "Please enter Username and Password!" });
    }
});

router.get('/signoff', (request, response) => {
    request.session.destroy();
    response.render('message', { message: "You have been signed off" });
});



module.exports = router;