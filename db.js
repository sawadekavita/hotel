const mongoose =require('mongoose')
require('dotenv').config()

// Define mongodb connection url
// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL
// setup mongoDB connection 
// mongoose.connect(mongoURL,{
//    useNewUrlParser: true,
//    useUnifiedTopology:true,
   
// })
mongoose.connect(mongoURL)

// get the default connection
const db = mongoose.connection;

// Define event listeners for database connections

db.on('connected',()=>{
    console.log('Connected to mongodb server')
});
db.on('error',(err)=>{
    console.error('mongodb connection error:',err)
});
db.on('disconnected',()=>{
    console.log('mongodb disconnected')
});

// export the db connection
module.exports = db;