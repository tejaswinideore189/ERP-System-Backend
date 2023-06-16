const mongoose = require('mongoose')
const erpSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },

    fName:{
        type:String,
        required:true
    },
    lName:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },

    userType:{
        type: String,
        required: true
    }

})

module.exports= mongoose.model("erpData",erpSchema)