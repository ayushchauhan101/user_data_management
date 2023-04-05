const mongoose = require('mongoose')
const validate = require('mongoose-validator');

const emailValidator = [
    validate({
        validator: 'isEmail',
        message: 'Invalid email address',
    }),
]

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    number: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        requried: true,
        validate: emailValidator,
        unique: true
    },
    hobbies: [String]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User