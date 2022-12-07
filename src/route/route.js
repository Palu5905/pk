const controller=require("../controller/userController.js")
const express=require('express')
const router=express.Router()




router.post('/createUser',controller.createuser)








module.exports=router