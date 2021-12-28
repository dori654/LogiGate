module.exports.homepage = async (req, res, next) => {
    await res.render("index", { title: "Express", user: req.session.username });
}

module.exports.login = async (req, res) => {
    await res.render("login", { title: "Login page" });
}

module.exports.game = async (req, res) => {
    await res.render("game");
}

module.exports.register = async (req, res) => {
    await res.render("register");
}

module.exports.chat = async (req, res) => {
    await res.render("chat");
}

module.exports.rate = async (req, res) => {
    await res.render("rate");
}

module.exports.tutorial = async (req, res) => {
    await res.render("tutorial");
}

module.exports.any = async (req, res, next) => {
    console.log("any function triggered");
    if (req.params.any.indexOf(".") === -1) {
        return await res.render(req.params.any, {}, (err, html) => {
            if (err) {
                return res.status(404).render("message", { message: "Page '" + req.params.any + "' not found" });
            } else {
                return res.send(html);
            }
        });
    } else {
        res.status(404).render("message", { message: "Page '" + req.params.any + "' not found" });
    }
}

