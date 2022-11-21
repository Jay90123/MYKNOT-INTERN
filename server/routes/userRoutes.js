const express=require("express")
const {register,login,getUserDetails}=require("../controllers/userAuth")

const router=express.Router()


router.route("/register").post(register)

router.route("/login").post(login)

router.route("/getuserdetails").get(getUserDetails)



module.exports=router