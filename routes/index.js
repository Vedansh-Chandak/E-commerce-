const express = require('express')
const route = express.Router()
const islogined =require("../middlewares/islogin-middleware.js")

route.get("/", function(res, req){
    res.render("index")
})

route.get("/shop", islogined, function(req, res){
res.render("shop");
})

module.exports = route