const app=require('./app')
const dotenv=require('dotenv')
const connectDatabade=require('./config/database')




//setting up config file
dotenv.config({path: 'backend/config/config.env' })


//connecting to databse
connectDatabade();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on PORT: ${process.env.PORT} and mode ${process.env.NODE_ENV}`)
})