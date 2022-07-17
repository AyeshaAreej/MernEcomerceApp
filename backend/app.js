const express =require('express')
const app=express();

const cookieParser=require('cookie-parser')

// const errorMiddleware= require('./middlewares/errors')

//Middleware to handle errors
// app.use(errorMiddleware);

app.use(cookieParser())
app.use(express.json());


//Import all routes
const products=require('./routes/product')
const auth=require('./routes/auth')

app.use('/api/v1',products)
app.use('/api/v1',auth)

module.exports=app 