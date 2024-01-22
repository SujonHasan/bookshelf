const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    publication: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    isFavourite: {
        type: Boolean,
    }

})

module.exports = mongoose.model('Books', bookSchema);