const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bodyParser =require("body-parser")



router.get("/category",(req,res)=>{
    mongoose.model("bag").find((error,result)=>{
    if(error){
                console.log(error)
            }
            console.log("got all bag")
           
            res.json(result)
        })  
});


router.get("/details/:id",(req,res)=>{
    mongoose.model("bag").findOne({_id: req.params.id},(error,data)=>{
        if(error){
            console.log(error)
        }
        // console.log(data)
        res.json(data)
    }) 
})





  
module.exports=router