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



