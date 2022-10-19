const express=require("express")
require("dotenv").config({path:"./config.env"})
const connectDB=require("./config/db")
const ErrorResponse=require("./middlewares/ErrorResponse")
const cookieParser=require("cookie-parser")


connectDB()
const app=express()


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",require("./routes/userRoutes.js"))
// app.use("/api/products",require("./routes/productRoutes"))
app.use("/api/themes",require("./routes/themeRoutes.js"))

app.use(ErrorResponse)


app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is listening on port ${process.env.PORT}`)
})