const mongoose = require('mongoose');

const privateMessageSchema = mongoose.Schema({
    sent_from: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "sent_from"
    },
    to_user: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "to_user"
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

module.exports = mongoose.model("privateMS", privateMessageSchema)