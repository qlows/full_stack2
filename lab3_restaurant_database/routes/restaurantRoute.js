const express = require('express');
const restaurantModel = require('../model/restaurantModel');
const app = express()
//app.use(restaurantModel)

// Return all restaurant details
// http://localhost:3000/restaurants
app.get("/restaurants", async (req, res) => {
    const restaurants = await restaurantModel.find({})

    try {
        res.status(200).send(restaurants)
    } catch (err) {
        res.status(400).send(err)
    }
})

// Return all restaurant details by cuisine
// http://localhost:3000/restaurants/Japanese or /Bakery or /Italian 
app.get("restaurants/cuisine/:cuisine", async (req, res) => {
    const cuisine = req.params.cuisine
    const restaurants = await restaurantModel.find({
        cuisine: cuisine
    })

    try {
        if (restaurants.length != 0) {
            res.send(restaurants)
        }
        else {
            res.send(JSON.stringify({
                status: false,
                message: "No restaurant found"
            }))
        }
    } catch (err) {
        res.status(400).send(err)
    }
})

// Sorting the restaurant_id in ascending or descending order
// http://localhost:3000/restaurants?sortBy=ASC or =DESC
app.get("/restaurants", async (req, res) => {
    const sortBy = req.query.sortBy;
    const restaurants = await restaurantModel.find({}).select("id resturant_id cuisine name city").sort({ "restaurant_id": sortBy })
    try {
        if (restaurants.length != 0) {
            res.send(restaurants);
        } else {
            res.send(JSON.stringify({ status: false, message: "No data found" }))
        }
    } catch (err) {
        res.status(400).send(err);
    }
})

// Return restaurants where all cuisines are equal to Delicatessen and the city is not equal tp Brooklyn
// http://localhost:3000/restaurants/Delicatessen
app.get('/restaurants/:cuisine/:city', async (req, res) => {
    const cuisine = req.params.cuisine
    const city = req.params.city

    const restaurants = await restaurantModel.find({ cuisine: cuisine })
        .where("city")
        .ne(city)
        .select("cuisine name city")
        .sort({ 'name': 'asc' });

    try {
        res.send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
})

/*
{
    "address": {
        "building": 115,
        "street": "Main Street",
        "zipCode": 1445
    },
    "city": "Toronto",
    "cuisine": "Italian",
    "name": "Pete's Pizza",
    "restaurant_id": 1478542
}
*/
app.post('/restaurants', async (req, res) => {
    console.log(req.body);
    const restaurants = new restaurantModel(req.body);
    try {
        await restaurants.save((err) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(res)
            }
        });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = app