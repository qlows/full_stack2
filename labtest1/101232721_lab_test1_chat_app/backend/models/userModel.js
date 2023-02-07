const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Enter username"],
        unique: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, "Enter password"]
    },
    created_on: {
        type: Date,
        default: Date.now()
    },
})

const chatters = [];

// Chatter room
function chatterRooms(room) {
    return chatters.filter(user => user.room === room);
}

// Current chatter
function getChatters(id) {
    return chatters.find(user => user.id === id);
}

// Join chat
function joinChatter(id, username, room) {
    const users = { id, room, username };
    chatters.push(users);
    return users;
}

// Chatter leaves
function chatterLeave(id) {
    const index = chatters.findIndex(user => user.id === id);

    if (index !== -1) {
        return chatters.splice(index, 1)[0];
    }
}



module.exports = {
    chatterRooms,
    getChatters,
    joinChatter,
    chatterLeave
};

module.exports = mongoose.model("users", userSchema)