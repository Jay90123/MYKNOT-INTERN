const User=require("../models/User")
const ErrorHandler=require("../utils/ErrorHandler")
const sendToken=require("../utils/sendToken")


exports.register=async(req,res,next)=>{
    const {name,email,password,confirmpassword,phone1,phone2,role}= await req.body

    try {
        const user=await User.create({
            name,email,password,confirmpassword,phone1,phone2,role
        })
    
        if(user){
            sendToken(user,201,res)
        }
        if(!user){
            return next(new ErrorHandler("User could not be created",400))
        }
    } catch (error) {
        console.log(error)
        return next(new ErrorHandler(error.message,error.code))
    }
}


exports.login=async(req,res,next)=>{
    const {email,password}=await req.body;
    try {

        
    if(!email || !password ){
        await next(new ErrorHandler("Please enter email or password",400))
      }
        
        const user=await User.findOne({email}).select("+password")

        if(!user){
            return next(new ErrorHandler("Please enter valid email or passowrd",400))
        }else{
           const isMatched=await user.passwordMatcher(password)
           
           if(isMatched){
            sendToken(user,201,res)
           }else{
                return next(new ErrorHandler("Please enter valid email or passowrd",400))
           }
        }


    } catch (error) {
        // console.log(error)
        return next(new ErrorHandler(error.message,error.code||error.statuscode||error.statusCode))
    }
}


