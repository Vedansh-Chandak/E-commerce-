const jwt = require("jsonwebtoken")
require("dotenv")

const user = require("../Models/user.models.js")
const generateToken = (user)=>{
    return jwt.sign({email: user.email, _id: user_id},process.env.JWT_KEY)
}





module.exports = generateToken;