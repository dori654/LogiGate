//user mongoose model
var { Schema, model } = require("mongoose");
var mongoose = require("mongoose");

var rateSchema = new Schema({
    user_rate: {
        type: String,
        unique: false
    }
});

rateSchema.plugin(require('mongoose-beautiful-unique-validation'));

const rateModel = mongoose.model('rat', rateSchema);

module.exports = rateModel;
