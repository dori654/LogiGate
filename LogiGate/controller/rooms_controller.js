var roomDB = require("../models/room");



module.exports.create = (req, res, next) => {
    console.log(req.body);
    if (req.body.roomname) {
        const user = new roomDB({
            name: req.body.roomname,
            users: [],
            rating: 0,
            feedback: [],
            code: ""
        });
        user.save();
        res.redirect("back");
    } else {
        console.log("no room name"); //TESTING PURPOSE ONLY
        res.sendStatus(400);
        next().status(200);
    }
    res.sendStatus(400);
    next().status(200);
}

module.exports.edit = async (req, res) => {
    await roomDB.findByIdAndUpdate(req.params._id, { code: req.body.code }, { useFindAndModify: false })
        .then((data) => {
            if (!data) {
                res.status(404).render('message', {
                    message: `Cannot Update room with id ${req.params._id} , Maybe room Not Found`,
                });
            } else {
                //all good, go back
                res.redirect("back");
            }
        })
        .catch((err) => {
            res.status(500).render('message', {
                message: err.message || 'Error Update Room Information',
            });
        });
}

module.exports.remove = async (req, res) => {
    await roomDB.findByIdAndDelete(req.params._id, (err, room) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect(req.get('referer'));
        }
    }).clone();
}

