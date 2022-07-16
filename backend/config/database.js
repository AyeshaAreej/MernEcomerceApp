const mongoose=require('mongoose')

const connectDatabade=()=>{
   mongoose.connect(process.env.DB_LOCAL_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    }).then(con=>{
    console.log(`Mongodb database connected with HOST: ${con.connection.host} `)
   }) 
}

module.exports=connectDatabade;
