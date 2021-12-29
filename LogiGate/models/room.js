//user mongoose model
var { Schema, model } = require("mongoose");
var mongoose = require("mongoose");

var roomSchema = new Schema({
    name: {
        type: String,
        unique: false
    },
    users: {
        type: [String],
        unique: false
    },
    rating: {
        type: Number,
        unique: false
    },
    feedback: {
        type: [String],
        unique: false
    },
    code: {
        type: String,
        unique: false
    }
});


roomSchema.plugin(require('mongoose-beautiful-unique-validation'));

const roomModel = mongoose.model('room', roomSchema, 'rooms');

module.exports = roomModel;
