//user mongoose model
var { Schema, model } = require("mongoose");

var userSchema = new Schema({
    uuid: Number,
    name: String,
    email: String,
    id: String,
    password: String,
    phone: String,
    role: String,
});

module.exports = model('User', userSchema);
