const express = require('express');
const mongoose = require('mongoose');
const SERVER_PORT = 3000
const userRouter = require('./route/userRoute');

mongoose.connect("mongodb+srv://qlows:ananinamizuck@cluster0.hm9ineu.mongodb.net/userdatabase?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)

const app = express()

// To return JSON
app.use(express.json())

app.use(userRouter);

// Create a new express app instance
app.route("/").get((req, res) => {
    res.send("<h1>Users database - Umit Kilinc 101232721</h1>")
})

// Start the server
app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})