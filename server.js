require('dotenv').config();
const express = require("express")
const app = express();
const db =  require('./db')
app.use(express.json())
const Person =  require("./models/person")
const MenuItem = require("./models/menu")

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("hello there")
})

const personRoutes = require("./routes/personRoutes")
app.use("/person",personRoutes)

const menuRoutes = require('./routes/menuRoutes')
app.use("/menu",menuRoutes)



// comment added for test
app.listen(PORT,()=>{
    console.log("listening on port 3000")
})