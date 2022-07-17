const express =require('express')
const app=express();

// const errorMiddleware= require('./middlewares/errors')

//Middleware to handle errors
// app.use(errorMiddleware);

app.use(express.json());


//Import all routes
const products=require('./routes/product')
app.use('/api/v1',products)

module.exports=app 