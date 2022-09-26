const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.getAllUsers = catchAsyncErrors(async(req , res , next)=>{
    const user = await User.find();
    res.status(201).json({
        success:true,
        user,
    })
})

exports.createUser = catchAsyncErrors(async(req,res,next)=>{
    const user = await User.create(req.body);
    res.status(201).json({
        success:true , 
        user,
    })
})