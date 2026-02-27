const mongoose = require('mongoose')

const mongoURL = 'mongodb://localhost:27017/hootels'
mongoose.connect(mongoURL)

const db = mongoose.connection;

db.on("connected",()=>{
    console.log("connected to mongodb server")
})

.on("error",(err)=>{
    console.log("Mongodb connection error",err)
})
.on("disconnected",()=>{
    console.log("Mongodb disconnected")
})

module.exports = db;
