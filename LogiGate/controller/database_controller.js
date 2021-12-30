const mongoose = require("mongoose");
const session = require('express-session');
const userModel = require("../models/user");
const loggerModel = require("../models/log");
const rateModel = require("../models/rat");
const express = require("express");
const { sendStatus } = require("express/lib/response");

var db = mongoose.connection;

module.exports.register = async (req, res) => {
    await userModel.findOne({ user_id: req.body.ID }, (err, user) => {
        if (err)
            console.log(err);
        else {
            if (user)
                return res.render('message', { message: "User already exists" });
            else {
                const user = new userModel({
                    name: req.body.f_name,
                    email: req.body.email,
                    user_id: req.body.ID,
                    password: req.body.password,
                    phone: req.body.phone,
                    role: req.body.role
                });
                const log = new loggerModel({
                    user_id: req.body.ID,
                    activity: ["Register"]
                });

                db.collection("logs").insertOne(log);
                db.collection("users").insertOne(user);


                res.render("message", { message: "Registration Successful" });
            }
        }
    }).clone();
}

module.exports.login = async (request, response) => {
    var username = request.body.ID;
    var pass = request.body.password;
    if (username && pass) {
        await userModel.findOne({ user_id: request.body.ID, password: pass }, (err, data) => {
            if (data) {
                request.session.loggedin = true;
                request.session.username = data.name;
                request.session.user_id = data.user_id;
                request.session.role = data.role;
                console.log(request.session.username);
                response.render("message", { message: "Login Successful" });
            } else {
                response.render("message", { message: "Login Unsuccessful :(" });
            }
        }).clone();
    } else {
        response.render('message', { message: "Please enter Username and Password!" });
    }
}

module.exports.signoff = async (req, res) => {
    req.session.destroy();
    res.render('message', { message: "You have been signed off" });
}




