const express = require("express")
const app = express()
const router = require("./routes/app.routes")

app.use(express.urlencoded({extended:true}))
app.set("view engine","ejs")
app.use("/app",router)

app.listen(3000,()=>{
    console.log("connection successfull")
})