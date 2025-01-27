const express = require('express')
const route = express.Router()

route.get("/", function(res, req){
    res.render("index")
})

module.exports = route