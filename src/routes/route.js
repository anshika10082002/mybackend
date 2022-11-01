const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const commonMW = require ("../middlewares/commonMiddlewares")



router.get("/getIpAddress" ,commonMW.mid1, UserController.getIpAddress)

//router.get("/getIpAddress" , UserController.getIpAddress)

router.get("/getCurrentTime",commonMW.mid1, UserController.getCurrentTime)

router.get("/getPath", commonMW.mid1,UserController.getPath)








module.exports = router;