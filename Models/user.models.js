const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    fullname : String,
    email: String,
    password: String,
    cart: {
        type:Array,
        default: []
    },
    isadmin: Boolean,
    orders: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String
})

const User = mongoose.model("User", userSchema)

module.exports = User;