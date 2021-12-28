//tranfer dashboard function here
var userDB = require("../models/user");
var logger = require("../models/log");
var roomDB = require("../models/room");

module.exports.dashboard = (req, res, next) => {
    if (req.session.role && req.session.role.toLowerCase() !== "student") {
        userDB.find({}, (err, users) => {
            if (err) {
                console.log(err);
            } else {
                res.render("dashboard", {
                    title: "Dashboard",
                    students: users,
                    layout: "dashboard_layout"
                });
            }
        }).clone();
    } else {
        res.render("message", { message: "You are not authorized to view this page" });
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

module.exports.edit = async (req, res) => {
    await userDB.findByIdAndUpdate(req.params._id, req.body, { useFindAndModify: false })
        .then((data) => {
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

module.exports.export = (req, res) => {
    res.render('message', { message: "Export page does not exist" });
}

module.exports.analytics = (req, res) => {
    res.render('message', { message: "Analytics page does not exist" });
}

module.exports.reports = (req, res) => {
    logger.find({ user_id: req.params.user_id }).clone().lean().then(log => {
        userDB.find({ user_id: req.params.user_id }).clone().lean().then(data => {
            console.log(data);
            res.render('reports', {
                title: "Reports",
                layout: "dashboard_layout",
                user: data[0].name,
                action: log[0].activity
            });
        });
    });
}
module.exports.rooms = async (req, res) => {
    let rooms = [];
    await roomDB.find({}, (err, data) => { data.forEach(d => rooms.push(d)) }).clone();
    await res.render('rooms', { title: "Rooms", layout: "dashboard_layout", rooms: rooms });
}


