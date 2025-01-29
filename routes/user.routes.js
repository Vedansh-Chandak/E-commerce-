const express = require("express");
const router = express.Router();
const registerUser = require("../controllers/auth-controller.js");
const userModel = require("../Models/user.models.js");
const loginUser = require("../controllers/auth-controller.js")

router.get("/", function (req, res) {
  res.send("Hey");
});

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
