const express=require("express")
const { createTheme, getAllThemes, updateAllThemes } = require("../controllers/themecontroller")
const { isAutheticatedUser,authorizedRole } = require("../middlewares/Authentication")

const router=express.Router()

router.route("/createtheme").post(createTheme)

router.route("/getallthemes").get(getAllThemes)

router.route("/updatemanythemes").put(updateAllThemes)



module.exports=router