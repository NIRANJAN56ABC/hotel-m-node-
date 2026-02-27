const mongoose = require('mongoose')
require('dotenv').config();

// const mongoURL = process.env.MONGODB_URL_LOCAL;
const mongoURL=process.env.MONGODB_URL;
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
