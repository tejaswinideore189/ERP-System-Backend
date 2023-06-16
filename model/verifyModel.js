const mongoose =require("mongoose")
const verifySchema =new mongoose.Schema({
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("verifyData",verifySchema)