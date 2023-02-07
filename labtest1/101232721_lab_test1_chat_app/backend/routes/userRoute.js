const express = require('express');
const userModel = require('../models/userModel');
const  users = require("../models/userModel")
const routes = express.Router()

// http://localhost:3000/signup
// User signup route
routes.post("/signup", async(req, res) => {
    try{
        const newUser = new userModel(req.body)
        const user = await newUser.save()
        res.status(200).send(user)
        console.log("User has been created.")
    }
    catch(err){
        res.status(400).send(err)
    }
})

