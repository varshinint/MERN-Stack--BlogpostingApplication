const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/MERN');

const db =mongoose.connection

db.on('connected' ,()=>{
    console.log("success , momgo db is connected")
})

db.on('error' ,()=>{
    console.log("error is found ")
})

module.exports=mongoose
