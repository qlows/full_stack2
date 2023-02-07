const express = require('express');
const mongoose = require('mongoose');
const socketio = require("socket.io");
const path = require('path');
const http = require('http');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./models/users');
const groupMessageRoute = require('./routes/groupMessageRoute');
const privateMessageRoute = require('./routes/privateMessageRoute');
const userRoute = require('./routes/userRoute');

// Database connection
mongoose.connect("mongodb+srv://qlows:ananinamizuck@cluster0.hm9ineu.mongodb.net/chatapp?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    }).then(success => {
        console.log('Established connection with MongoDB.')
    }).catch(err => {
        console.log('Error while establishing connection to MongoDB.')
    });

// Server message
const SERVER_PORT = 3000
app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})

const app = express()
const server = http.createServer(app);
const io = socketio(server);

