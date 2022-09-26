const mongoose = require("mongoose");
const validator  = require("validator");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , "please Enter Your Name"] ,
        maxLength:[30 , "The Name Can't Be grater than 30 characters"],
    } , 
    password:{
            type:String ,
            required:[true , "please Enter Your Password"],
            minLength:[8 , "Passowd Should Be grater Than 8 characters "] ,
    } , 
    email:{
        type:String , 
        required:[true , "please Enter Your Email ID"] , 
        unique:true ,
        validate:[validator.isEmail , "please Enter Email"]
    } , 
    contact:{
        type:String , 
        required:[true , "Please Enter Contact Number"] ,
        validate:[ validator.isMobilePhone ,"please Enter Correct Number"]
    }
})

module.exports = mongoose.model("User" , userSchema);