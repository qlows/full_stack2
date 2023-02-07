const mongoose = require('mongoose');

const groupMessageSchema = mongoose.Schema({
    sent_from: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "users"
    },
    chat: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Chat"
    },
    message: {
        type: String,
        required: true
    },
    date_sent: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("groupMS", groupMessageSchema)