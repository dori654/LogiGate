//tranfer dashboard function here
var userDB = require("../models/user");
var logger = require("../models/log");
var roomDB = require("../models/room");

const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config({ path: path.join("..", "bin", ".env") });

module.exports.dashboard = (req, res, next) => {
    if (req.session.role && req.session.role.toLowerCase() !== "student") {
        userDB.find({}, (err, users) => {
            if (err) {
                console.log(err);
            } else {
                return res.render("dashboard", {
                    title: "Dashboard",
                    students: users,
                    layout: "dashboard_layout"
                });
            }
        }).clone();
    } else {
        return res.render("message", { message: "You are not authorized to view this page" });
    }
}

module.exports.remove = async (req, res) => {
    await userDB.findByIdAndDelete(req.params._id, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect(req.get('referer'));
        }
    }).clone();
}

module.exports.edit_post = async (req, res) => {
    console.log(req.body);
    await userDB.findByIdAndUpdate(req.params._id, {
        name: req.body.name,
        email: req.body.mail,
        password: req.body.pass,
        phone: req.body.phone

    }, { useFindAndModify: false })
        .then((data) => {
            console.log(data);
            if (!data) {
                res.status(404).render('message', {
                    message: `Cannot Update user with id ${req.params._id} , Maybe User Not Found`,
                });
            } else {
                //make the edit page here
                res.render('edituser', {
                    title: "Edit User",
                    layout: "dashboard_layout"
                });
            }
        })
        .catch((err) => {
            res.status(500).render('message', {
                message: err.message || 'Error Update User Information',
            });
        });
}

module.exports.edit = async (req, res) => {
    res.render('edituser', {
        title: "Edit User",
        layout: "dashboard_layout",
        _id: req.params._id
    });
}

module.exports.export = (req, res) => {
    res.render('export', {
        layout: "dashboard_layout",
        title: "Export"
    });
}

//if you unit test the function make sure to check for 404 answer because no 'real' ip address can be provided 
// dori, and dani 
module.exports.export_send = (req, res) => {
    Promise.all([
        logger.find({}),
        userDB.find({}),
        roomDB.find({})
    ]).then(([logs, users, rooms]) => {
        const net = require('net');
        try {
            const client = new net.Socket();
            client.connect(8080, req.body.adrs, () => {
                // callback, when connection successfull
                client.write([logs, users, rooms]);
            });
            client.on('data', (data) => {
                console.log(data.toString());
            });
            client.on('close', (data) => {
                console.log('Connection closed');
            });
            client.on('error', (err) => {
                console.log(err);
            });
        } catch (err) {
            console.log(err);
        }
    }).catch((err) => {
        console.log(err);
        res.render('message', { message: err.message || 'Error in sending data' });
    });
    res.redirect(req.get('referer'));
}

module.exports.analytics = async (req, res, next) => {
    await Promise.all([
        logger.find({}),
        userDB.find({})
    ]).then(([logs, users]) => {
        var info = [];
        users.forEach(user => {
            var actions = 0;
            var rates = 0;
            logs.forEach(log => {
                if (log.user_id === user.user_id) {
                    log.activity.forEach(activity => {
                        actions++;
                        if (activity.includes("Rate")) { rates++; }
                    });
                }
            });
            info.push({
                user: user.name,
                actions: actions,
                rates: rates
            });
            actions = 0;
            rates = 0;
        });
        return res.render('analytics', { title: "Analytics", layout: "dashboard_layout", users: info });
    }).catch((err) => { console.log(err); next(); });
    // return res.render('analytics', { title: "Analytics", layout: "dashboard_layout" });
}

module.exports.reports = (req, res) => {
    //search for user_id in loggerdb and userdb in promise.all
    Promise.all([
        logger.findOne({ user_id: req.params.user_id }),
        userDB.findOne({ user_id: req.params.user_id })
    ])
        .then(([logs, user]) => {
            if (!logs || !user) {
                res.status(500).render('message', {
                    message: `Cannot find user with id ${req.params.user_id}`,
                });
            } else {
                res.render('reports', {
                    title: "Reports",
                    layout: "dashboard_layout",
                    user: user.name,
                    action: logs.activity
                });
            }
        });
}

module.exports.rooms = async (req, res) => {
    let rooms = [];
    await roomDB.find({}, (err, data) => { data.forEach(d => rooms.push(d)) }).clone();
    await res.render('rooms', { title: "Rooms", layout: "dashboard_layout", rooms: rooms });
}

module.exports.news = (req, res) => {
    res.render('news', { title: "News", layout: "dashboard_layout" });
}


module.exports.send = async (req, res) => {
    await userDB.find({ role: req.body.role }, (err, data) => {
        var mails = [];
        data.forEach(d => mails.push(d.email));
        console.log(req.body.news);
        var mailer = nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            var transport = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false, // true for 465, false for other ports
                auth: {
                    user: process.env.mail, // generated ethereal user
                    pass: process.env.pass  // generated ethereal password
                }
            });

            var message = {
                from: '"LogiGate" <erica.flatley22@ethereal.email>',
                to: mails,
                subject: "Message for: " + req.body.role,
                text: req.body.news
            }
            transport.sendMail(message, (error, info) => {
                if (error) {
                    console.log('Error occurred');
                    console.log(error.message);
                    return;
                }

                console.log('Message sent successfully!');
                console.log(nodemailer.getTestMessageUrl(info));
                transport.close();
            });
        });
    }).clone();
    await res.redirect(req.get('referer'));
}

module.exports.send_push = async (req, res) => {
    var transport = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.mail, // generated ethereal user
            pass: process.env.pass  // generated ethereal password
        }
    });

    var message = {
        from: '"LogiGate" <erica.flatley22@ethereal.email>',
        to: req.body.mail,
        subject: "Message for: " + req.body.mail,
        text: req.body.message
    }
    transport.sendMail(message, (error, info) => {
        if (error) {
            console.log('Error occurred');
            console.log(error.message);
            return;
        }

        console.log('Message sent successfully!');
        console.log(nodemailer.getTestMessageUrl(info));
        transport.close();
    });
    await res.redirect(req.get('referer'));

};



