// var fs = require('fs');
// var os = require('os');

// var user= os.userInfo();
// console.log(user)
// console.log(user.username)

// fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n' , ()=>{
//     console.log("file is created ")
// });

// const notes = require('./notes.js')
// var _=require('lodash');

// var age= notes.age
// var result  =notes.addNumber(age+18, 10);
// var data =["person",1,1,2,3,4,3,5,4,"age","person"
// ]
// var filter = _.uniq(data)
//  console.log(age)
//  console.log("result is now "+ result)
//  console.log(filter)

const express = require("express");
const app = express();
const db = require("./db");
require('dotenv').config()

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT =process.env.PORT || 3000

// const person = require("./models/person");
// const MenuItem = require("./models/MenuItem");

app.get("/", function (req, res) {
  res.send("Welcome to my hotel");
});
// app.get("/burger",function(req,res){
//     res.send("burger")
// })
// app.get("/idli",function(req,res){
//     var customized_idli ={
//         name:'rava idli',
//         is_sambhar:true,
//         is_chutney:false
//     }
//     res.send(customized_idli)
// })

// Import the router files
const personRoutes = require("./routes/personRoutes");
const menuItemRoutes = require("./routes/menuItemRoutes");

// use the routers
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);


app.listen(PORT, () => {
  console.log("listing on port 3000");
});
// password CR1khjbo7wbP6j5V user kharatmanoj2907