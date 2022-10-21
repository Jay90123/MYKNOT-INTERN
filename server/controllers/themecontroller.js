const Themes = require("../models/Themes")
const ErrorHandler = require("../utils/ErrorHandler")

exports.createTheme=async(req,res,next)=>{
    const {title,description,price,img,category,siteurl}=req.body

    try {
        const theme=await Themes.create({title,description,price,img,category,siteurl})
        if(!theme){
            return next(new ErrorHandler("Theme could not be created",400))
        }else{
            return res.status(200).json({
                success:true,
                theme
            })
        }
        
    } catch (error) {
        return next(new ErrorHandler(error.message,error.code))
    }
}

exports.getAllThemes=async(req,res,next)=>{
    try {
        const themes=await Themes.find()
        const themescount=await Themes.countDocuments()

        if(themes){
            return res.status(200).json({
                success:true,
                themescount,
                themes
            })
        }else{
            return next(new ErrorHandler("Themes not found",400))
        }

    } catch (error) {
        return next(new ErrorHandler(error.message,error.code))
    }
}


exports.updateTheme=async(req,res,next)=>{
    try {
        const themeID=await req.header("themeID")

        const theme=await Themes.findById({_id:themeID})
        
        if(theme){
            
                let updateTheme=await Themes.findByIdAndUpdate(themeID,req.body,{
                    new:true,runValidators:true,
                    useFindAndModify:true})
                    if(updateTheme){
                        res.status(200).json({
                            success:true,
                            updateTheme
                        })
                    }else{
                        return next(new ErrorHandler("Failed to update the theme",400))
                    }
            
        }else{
            return next(new ErrorHandler("Theme not found",400))
        }

    } catch (error) {
        return next(new ErrorHandler(error.message,error.statuscode))
    }
}


exports.deleteTheme=async(req,res,next)=>{
    const themeID=await req.header("themeID")
    // const userID=await req.user._id.toString()
    if(!themeID){
        return next(new ErrorHandler("Theme not selected ",400))
    }
    
    try {
        const theme=await Themes.findById({_id:themeID})
        if(theme){

   
                const deletedtheme=await Themes.findByIdAndDelete({_id:themeID})

                if(deletedtheme){
                    res.status(200).json({
                        success:true,
                        message:"Theme deleted successfully",
                        deletedtheme
                    })
                }else{
                    return next(new ErrorHandler("Theme could not be deleted",400))
                }
         
        }else{
            return next(new ErrorHandler("Theme not found",400))
        }
    } catch (error) {
        return next(new ErrorHandler(error.message,error.statuscode))
    }
}


