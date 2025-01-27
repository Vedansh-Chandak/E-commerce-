const mongoose = require("mongoose");
const dbgr = require('debug')("developement:mongoose");

  const connectDB = async ()=>{
    try {
      const connectionInstance = await mongoose.connect('mongodb+srv://vedansh:vedansh@cluster0.qulu3.mongodb.net')
     dbgr(`\n mongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
   
    } catch (error) {
       console.log(error)
       process.exit(1)
    }
   
   }

module.exports = connectDB