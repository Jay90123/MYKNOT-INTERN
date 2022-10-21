const express=require("express")
const { createTheme, getAllThemes } = require("../controllers/themecontroller")
const { isAutheticatedUser,authorizedRole } = require("../middlewares/Authentication")

const router=express.Router()

router.route("/createtheme").post(createTheme)

router.route("/getallthemes").get(getAllThemes)



module.exports=router