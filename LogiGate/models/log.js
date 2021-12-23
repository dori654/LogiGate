//user mongoose model
var { Schema, model } = require("mongoose");
var mongoose = require("mongoose");

var logSchema = new Schema({
    user_id: {
        type: String,
        unique: true
    },
    activity: {
        type: [String],
        unique: false
    }
});

logSchema.plugin(require('mongoose-beautiful-unique-validation'));

const logModel = mongoose.model('log', logSchema);

module.exports = logModel;
