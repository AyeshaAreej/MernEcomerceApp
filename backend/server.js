const app=require('./app')
const dotenv=require('dotenv')
const connectDatabade=require('./config/database')




//setting up config file
dotenv.config({path: 'backend/config/config.env' })


//connecting to databse
connectDatabade();

const server=app.listen(process.env.PORT, ()=>{
    console.log(`Server is listening on PORT: ${process.env.PORT} and mode ${process.env.NODE_ENV}`)
})

//Handling unhandled promise rejection
process.on('unhandledRejection',err=>{
    console.log(`Error : ${err.message}`);
    console.log('Shutting down the server due to unhandled Promise rejection');
    server.close(()=>{
        process.exit(1);
    })
})