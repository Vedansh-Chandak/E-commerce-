const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017//e-commerse")

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