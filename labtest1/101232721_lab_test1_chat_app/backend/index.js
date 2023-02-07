const express = require('express');
const mongoose = require('mongoose');
const socketio = require("socket.io");
const path = require('path');
const http = require('http');
const { chatterRooms, getChatters, joinChatter, chatterLeave } = require('./models/users');
/* const groupMessageRoute = require('./routes/groupMessageRoute');
const privateMessageRoute = require('./routes/privateMessageRoute');
const userRoute = require('./routes/userRoute'); */

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

app.use(express.static(path.join(__dirname, 'frontend')));

const appName = "chatter";

// Run when client connects
io.on('connection', socket => {
    socket.on('joinChat', ({ username, chat }) => {
        const user = joinChatter(socket.id, username, chat);

        socket.join(user.chat);

        // Greet the chatter
        socket.emit('message', formatMessage(appName, 'Welcome chatter...'));

        // When the chatter connects
        socket.broadcast.to(user.chat).emit('message', formatMessage(appName, `${user.username} joined.`));

        // Send chatters and chat info
        io.to(user.chat).emit('currentChatters', {
            chat: user.chat,
            users: getRoomUsers(user.chat)
        });
    });

    // Listen chat
    socket.on('chatMessage', msg => {
        const user = getCurrentChatter(socket.id);

        io.to(user.chat).emit('message', formatMessage(user.username, msg));
    });

    // Chatter leaves
    socket.on('chatterLeft', () => {
        const user = chatterLeave(socket.id);

        if (user) {
            io.to(user.chat).emit(
                'message',
                formatMessage(appName, `${user.username} left.`)
            );

            // Send users and room info
            io.to(user.chat).emit('chatterRoom', {
                chat: user.chatter,
                users: getRoomUsers(user.chat)
            });
        }
    });
});


//http://localhost:3000/register
app.get('/register', async (req, res) => {
    res.sendFile(__dirname + '/frontend/register.html')
});

//http://localhost:3000/login
app.get('/login', async (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
});
app.post('/login', async (req, res) => {
    const user = new userModel(req.body);
    try {
        await user.save((err) => {
            if (err) {
                if (err.code === 11000) {
                    return res.redirect('/signup?err=username')
                }

                res.send(err)
            } else {
                res.sendFile(__dirname + '/public/login.html')
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});