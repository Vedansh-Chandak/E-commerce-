const cookieParser = require("cookie-parser");
const express = require("express")
const app =express();
const ownersRouter = require('./routes/owner.routes.js')
const usersRouter = require('./routes/user.routes.js')
const productRouter = require('./routes/product.routes')
const path =require("path")
const connectDB = require('./config/mongoose-connection.js')

app.use(cookieParser());
connectDB()
.then(()=>{
    const server = app.listen(process.env.PORT || 8000, ()=>{
        console.log(`surver is, ${process.env.PORT}`)
    })
    server.on('error',(error)=>{
      console.log('Error:',error)
    })
})
.catch( (error)=>{
    console.log('MongoDB connection failed', error)
})

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use('/products', productRouter)
