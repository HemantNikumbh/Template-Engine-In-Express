const express = require("express")
const router = express.Router()

router.get("/report",(req,res)=>{
    const student=[
        {
            Firstname:"Hemant",
            Lastname:"Nikumbh",
            RollNo:"44"
        },
        {
            Firstname:"Rishi",
            Lastname:"Pillai",
            RollNo:"45"
        },
        {
            Firstname:"Santosh",
            Lastname:"Khairnar",
            RollNo:"46"
        },
        {
            Firstname:"Yash",
            Lastname:"Mali",
            RollNo:"47"
        },
        {
            Firstname:"Omkar",
            Lastname:"Padwal",
            RollNo:"48"
        },
        

    ]
    return res.render("report",{student});
})

module.exports = router