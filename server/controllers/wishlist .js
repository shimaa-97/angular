const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Wishlist=require("../models/wishlist")


router.get("/allWishlist",(req,res,next)=>{  
mongoose.model("wishlist").find({},(error,data)=>{
    if(error){
        console.log(error)
    }
    console.log(data)
    res.json(data)
})
}),

router.get("/bag/wishlist/:id/:name/:price",(req,res,next)=>{
 const productprice =parseInt(req.params.price,10); 
 const nameproduct = req.params.name
//    const newproduct= {
//        _id:req.params._id,
//        name: req.params.name,
//        price:productprice
//    }
   
//  const bagID =
  mongoose.model("wishlist").find({_id:req.params.id},()=>{
    // if (bagID) {
    //     return res.send ("product already exists")
    // }
    // else{
    if(Wishlist)  { 
        const newwishlist=new Wishlist({
            _id:req.params.id ,
             totalprice:productprice,
             productName: nameproduct
            //  selectedproduct:[newproduct]
        }) 
        newwishlist.save((error,data)=>{
                          if (error){
                              console.log(error)
                          }
                          console.log(data)
                      })}
    // }
 
        
    })
    })
module.exports=router