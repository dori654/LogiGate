module.exports.game = async (req, res) => {
    await res.render("game");
}

module.exports.rate = async (req, res) => {
    await res.render("rate");
}
