const express = require('express');
const userModel = require('../model/userModel');
const app = express();

// http://localhost:3000/users
app.post('/users', async (req, res) => {
    const user = new userModel(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

module.exports = app;