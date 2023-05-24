const mongoose = require('mongoose')
const connectToMongo = require('../src/connectToMongo')

connectToMongo();
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    joiningDate:{
        type:Date,
        default:Date.now()
    }
})


const User = mongoose.model("user", userSchema)
User.createIndexes();
module.exports = User