const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
        maxLength: [78, 'Your name cannot exceed 78 characters']
    },
    username: {
        type: String,
        required: [true, 'Please enter username'],
        minLength: [4, 'Your username must be at least 4 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please enter email'],
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        },
        message: props => `Please enter a valid email address`
    },
    address: {
        street: {
            type: String,
            required: [true, 'Please enter street'],
        },
        suite: {
            type: String,
            required: [true, 'Please enter suite'],
        },
        city: {
            type: String,
            required: [true, 'Please enter city'],
            validate: function(value) {
                var cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
                return cityRegex.test(value);
            },
        },
        zipcode: {
            type: Number,
            required: [true, 'Please enter zipcode'],
            validate: function(value) {  
                var zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
                return zipRegex.test(value);
            },
    },
});