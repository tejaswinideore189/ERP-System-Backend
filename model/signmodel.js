const mongoose = require('mongoose')
const signSchema = new mongoose.Schema({
    email:{
        type:String,
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

module.exports = mongoose.model('erplogin', signSchema)