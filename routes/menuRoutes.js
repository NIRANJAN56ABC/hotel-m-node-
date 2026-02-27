const express = require('express')
const MenuItem=  require("./../models/menu")
const router = express.Router();


router.post("/",async(req,res)=>{
    try{
    const data = req.body;
    const newMenu = new MenuItem(data);
    const savedMenu = await newMenu.save();
    console.log("data saved")
    res.status(200).json(savedMenu)
    }
    catch(err){
        console.log(err);
        res.status(500).json('Internal server error',err)
    }
})

router.get("/",async(req,res)=>{
    try{
        const data = await MenuItem.find();
        console.log("data fetched");
         res.status(200).json(data)
    }
    catch(err){
        console.log(err);
        res.status(500).json('Internal server error',err)

    }
    
})

router.get("/:tasteMenu",async(req,res)=>{
    try{
        const tasteMenu = req.params.tasteMenu;
        if(tasteMenu=='sweet'|| tasteMenu=='spicy'|| tasteMenu=='sour'){
            const data = await MenuItem.find({taste:tasteMenu})
            console.log("data fetched")
        res.status(200).json(data )
        }
        else{
         res.status(200).json({
            err : "Invalid taste type"
         })
        }
    }
      catch(err){
        console.log(err);
        res.status(500).json({
            err:'Internal server error'
        })
    }
})

module.exports = router;