const mongoose = require("mongoose")
const salarySchema = new mongoose.Schema({
     email:{
        type:String,
        required:true
     },
     fName:{
        type:String,
        required:true
     },
     salary:{
        type:Number,
        required:true        
     },
     tax:{
        type:Number,
        required:true  
     },
   //   nsal:{
   //      type:Number,
   //      required:true  
   //   },

     password:{
        type:String,
        required:true,
     },

     created_at: {
      type: Date,
      default: Date.now()
     }
})

module.exports= mongoose.model("salaryData", salarySchema)
