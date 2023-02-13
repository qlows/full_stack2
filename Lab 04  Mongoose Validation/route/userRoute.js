const express = require('express');
const User = require('../model/userModel');
const app = express();

// Create a new user
// http://localhost:3000/users
app.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        res.status(201).send(user)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

// Get all users
// http://localhost:3000/users
app.get('/users', async (req, res) => {
    try {
      const users = await User.find({})
      res.send(users)
    } catch (err) {
      res.status(500).send(err.message)
    }
  })
module.exports = app;