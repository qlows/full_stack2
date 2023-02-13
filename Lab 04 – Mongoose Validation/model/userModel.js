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
        validate: function (value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        },
        message: props => `${props.value} is not an email address!`
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
            validate: function (value) {
                var cityRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
                return cityRegex.test(value);
            },
        },
        zipcode: {
            type: Number,
            required: [true, 'Please enter zipcode'],
            validate: function (value) {
                var zipRegex = /^\d{5}(?:[-\s]\d{4})?$/;
                if (!zipRegex.test(value)) {
                    throw new Error('Zipcode is not in the correct format');
                }
                return value;
            },
            set: function (value) {
                return Number(value.split('-')[0]);
            },
            geo: {
                lat: {
                    type: Number,
                    required: [true, 'Please enter latitude'],
                },
                lng: {
                    type: Number,
                    required: [true, 'Please enter longitude'],
                }
            }
        },
    },
    phone: {
        type: String,
        required: [true, 'Please enter phone'],
        validate: function (value) {
            var phoneRegex = /^\d{1}-\d{3}-\d{3}-\d{4}$/;;
            return phoneRegex.test(value);
        },
        message: props => `${props.value} is not a phone number!`
    },
    website: {
        type: String,
        required: [true, 'Please enter website'],
        validate: function (value) {
            var websiteRegex = /^(http|https):\/\/[^ "]+$/;
            return websiteRegex.test(value);
        },
        message: props => `${props.value} is not a website!`
    },
    company: {
        name: {
            type: String,
            required: [true, 'Please enter company name'],
        },
        catchPhrase: {
            type: String,
            required: [true, 'Please enter catch phrase'],
        },
        bs: {
            type: String,
            required: [true, 'Please enter bs'],
        }
    }
});

module.exports = mongoose.model('User', userSchema);