const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        default: "Room"
    },
    date: {
        type: Date,
        default: Date.now()
    },
    users: [{
        type: mongoose.Schema.ObjectId,
        ref: "users"
    }],
})

module.exports = mongoose.model("room", roomSchema)