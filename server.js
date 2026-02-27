const express = require("express")
const app = express();
const db =  require('./db')
app.use(express.json())
const Person =  require("./models/person")
const MenuItem = require("./models/menu")


app.get("/",(req,res)=>{
    res.send("hello there")
})

const personRoutes = require("./routes/personRoutes")
app.use("/person",personRoutes)

const menuRoutes = require('./routes/menuRoutes')
app.use("/menu",menuRoutes)


app.listen(3000,()=>{
    console.log("listening on port 3000")
})