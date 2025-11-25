const express = require("express")
const homepageRouter = express.Router() ; 

homepageRouter.get("/welcome" (req , res) => {
    res.status(201).json({
        success : true , 
        message : "welcome to homepage" 
    })
})

module.exports = homepageRouter