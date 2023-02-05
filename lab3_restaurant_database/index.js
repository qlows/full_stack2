const express = require('express');
const mongoose = require('mongoose');
const restaurantRouter = require('./routes/restaurantRoute');
const SERVER_PORT = 3000

mongoose.connect("mongodb+srv://qlows:ananinamizuck@cluster0.hm9ineu.mongodb.net/restaurant_backend?retryWrites=true&w=majority",
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
)

const app = express()

// To return JSON
app.use(express.json())

app.use(restaurantRouter)

app.route("/").get((req, res) => {
    res.send("<h1>Restaurant backend</h1>")
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})