const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
   images: String,
   name: String,
   pice: Number,
   discount: {
    type: Number,
    default: 0
   },
   bgcolor: String,
   panelcolor: String,
   textcolor: String
})


export const Product = mongoose.model("Product", productSchema)