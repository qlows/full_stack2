const express = require('express');
const userModel = require('../models/userModel');
const users = require("../models/userModel")
const routes = express.Router()
const bcrypt = require("bcrypt")

// http://localhost:3000/signup
// User signup
routes.post("/signup", async (req, res) => {
    const {
        email, username, password
    } = req.body
    const existingUser = await users.findOne({email})

    if(existingUser){
        res.status(400).send(err)
    }

    if (!email || !name || password) {
        res.status(400).send(err)
    }
    try {
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new userModel({username: req.body.username, email: req.body.email, password: hashedPassword});
        await newUser.save()
        res.status(201).json(newUser)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

// http://localhost:3000/login
// User login
routes.post("/login", async (req, res) => {
    
})
