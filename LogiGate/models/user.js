//user mongoose model
var { Schema, model } = require("mongoose");
var mongoose = require("mongoose");

var userSchema = new Schema({
    name: {
        type: String,
        unique: false
    },
    email: {
        type: String,
        unique: false
    },
    user_id: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: false
    },
    phone: {
        type: String,
        unique: false
    },
    role: {
        type: String,
        unique: false
    }
});

userSchema.plugin(require('mongoose-beautiful-unique-validation'));

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
// module.exports = model('User', userSchema, "Users");
