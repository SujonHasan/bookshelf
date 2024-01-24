const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    title:{
        type: String,
        minLength: [2, 'This field must be at least 2 character'],
        maxLength: [20, 'This field must be less than 20 character'],
        required: true,
    },
    author:{
        type: String,
        minLength: [2, 'This field must be at least 2 character'],
        maxLength: [15, 'This field must be less than 15 character'],
        required: true,
    },
    publication: {
        type: Number,
        min: 1900,
        max: 2024,
        required: true,
    },
    price: {
        type: Number,
        min: 1,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    isFavourite: {
        type: Boolean,
    },
    token: {
        type: String
    }

})

module.exports = mongoose.model('Books', bookSchema);