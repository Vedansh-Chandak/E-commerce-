const userModel = require("../Models/user.models.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookie = require("cookie-parser");
require("dotenv").config();
const generateToken = require("../utils/generateToken.js");

const registerUser = function (req, res) {
  try {
    let { fullname, email, password } = req.body;

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
  } catch (error) {
    console.log("ERROR", error.message);
  }
};

module.exports = registerUser;
