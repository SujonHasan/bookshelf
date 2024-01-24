const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        minLength: [2, 'This field must be at least 2 character'],
        maxLength: [15, 'This field must be at least 15 character'],
        required: true,
    },
    lastName: {
        type: String,
        minLength: [2, 'This field must be at least 2 character'],
        maxLength: [15, 'This field must be at least 15 character'],
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email required"],
        lowercase: true,
        validate: {
            validator: function (value) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format',
          }
    },
    password: {
        type: String,
        minLength: [6, 'Password must be at least 6 character'],
        required: true,
    }
})


module.exports = mongoose.model('Users', userSchema);