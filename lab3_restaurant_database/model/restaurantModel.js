const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
    address: {
        building: {
            type: Number,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        zipCode: {
            type: Number,
            required: true
        },
    },
    city: {
        type: String,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    restaurant_id: {
        type: Number,
        required: true,
    },
})

const restaurantModel = mongoose.model("restaurantModel", RestaurantSchema)
module.exports = restaurantModel