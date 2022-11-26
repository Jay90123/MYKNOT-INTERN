const express=require("express")
const { addToCart } = require("../controllers/cartController")

const router=express.Router()


router.route("/addtocart").post(addToCart)

module.exports=router