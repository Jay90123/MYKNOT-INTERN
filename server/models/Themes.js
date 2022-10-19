const mongoose=require("mongoose")

const themesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        default:9999
    },
    category:{
        type:String,
        required:true
    },
    siteurl:{
        type:String,
        required:true
    }
})

const Themes=mongoose.model("Themes",themesSchema)
module.exports=Themes