const mongoose =require('mongoose')

// Define mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels'

// setup mongoDB connection 
mongoose.connect(mongoURL,{
   useNewUrlParser: true,
   useUnifiedTopology:true 
})
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