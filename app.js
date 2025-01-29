const cookieParser = require("cookie-parser");
const express = require("express")
const app =express();
const ownersRouter = require('./routes/owner.routes.js')
const usersRouter = require('./routes/user.routes.js')
const productRouter = require('./routes/product.routes')
const path =require("path")
const connectDB = require('./config/mongoose-connection.js')
const dotenv = require('dotenv');
const { log } = require("console");
const expressSession = require("express-session")
const flash = require("connect-flash")

dotenv.config();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
)
app.use(flash())

connectDB()
.then(()=>{
    const server = app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is running on port ${process.env.PORT || 3000}`);

    })
    server.on('error',(error)=>{
      console.log('Error:',error) 
    })
})
.catch( (error)=>{
    console.log('MongoDB connection failed', error)
})

// console.log(process.env.NODE_ENV );

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use('/products', productRouter)
