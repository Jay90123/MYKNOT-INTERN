const Cart = require("../models/Cart")
const ErrorHandler = require("../utils/ErrorHandler")

exports.addToCart=async(req,res,next)=>{
    const userID=req.header("userID")
    const themeID=req.header("themeID")
    try {
        const cart=await Cart.create({userID,themeID})
        if(cart){
            return res.status(200).json({
                success:true,
                message:"Successfully added to cart",
                cart
            })
        }else{
            return next(new ErrorHandler("Could not be added to cart",400))
        }
    } catch (error) {
        return next(new ErrorHandler(error.message,error.status))
    }
}