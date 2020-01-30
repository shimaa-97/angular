const mongoose =require("mongoose");
const wishlistschema = mongoose.Schema({

    _id:{
        required:true,
        type:String
    },
    // totalquantity:{
    //     required:true,
    //     type:Number
    // },
    totalprice:{
        
        type:Number
    },
    productName:{
        type:String
    }
    // ,
    // selectedproduct:{
    //     required:true,
    //     type:Array
    // }

})
module.exports=mongoose.model("wishlist",wishlistschema)