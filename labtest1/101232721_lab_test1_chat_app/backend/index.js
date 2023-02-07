const express = require('express');
const mongoose = require('mongoose');
const socketio = require("socket.io");


const groupMessageRoute = require('./routes/groupMessageRoute');
const privateMessageRoute = require('./routes/privateMessageRoute');
const userRoute = require('./routes/userRoute');



mongoose.connect("mongodb+srv://qlows:ananinamizuck@cluster0.hm9ineu.mongodb.net/chatapp?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    }
)

const SERVER_PORT = 3000
app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})

const app = express()