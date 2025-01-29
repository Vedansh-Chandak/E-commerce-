const userModel = require("../Models/user.models.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
require("dotenv").config();
const generateToken = require("../utils/generateToken.js");

const registerUser = async function (req, res) {
  try {
    let { fullname, email, password } = req.body;
  const user =  await userModel.find({email: email})
if(user) return res.status(401).send("You already have an account") 
  else{
    if (!fullname || !email || !password) {
      console.log("give all field properlly");
    } else {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          if (err) return res.send(err.message);
          else {
            const user = await userModel.create({
              email,
              password,
              fullname,
            });
            try {
              let token = generateToken(user);
              res.cookie("Token", token);
              res.send("user created successfully");
            } catch (error) {
              console.log(error.message);
            }
            res.status(201).send(user);
          }
        });
      });
    }
  }} catch (error) {
    console.log("ERROR", error.message);
  }
};

module.exports.loginUser = async function (req, res) {
  let {email, password} = req.body;
  let user = await userModel.findOne({email: email})
  if(!user) return res.send(401).send("email or password incorrect")
    
    bcrypt.compare(password, user.password, function(err, result){
      res.sedn(result)
    })
    if(result = true){
      let token = generateToken(user)
      res.cookie("token", token)
      res.send("you can login")
    }

}



module.exports = registerUser;
