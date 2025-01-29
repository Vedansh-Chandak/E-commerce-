const jwt = require("jsonwebtoken");
const userModel = require("../Models/user.models.js");
const flash = require("connect-flash")

module.exports = async function (req, res, next) {
  if (!req.cookies.token) {
    req.flash("error", "you need to first login");
    return res.redirect("/");
  }
  try {
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
    let user = await userModel
      .findOne({ email: decoded.email })
      .select("-password");
    req.user = user;
    next();
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/");
  }
};
