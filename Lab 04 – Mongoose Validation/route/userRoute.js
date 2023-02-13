const express = require('express');
const userModel = require('../model/userModel');
const app = express();

// http://localhost:3000/users
app.get('/users', async (req, res) => {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = app;