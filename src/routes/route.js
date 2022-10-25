const express = require('express');
const router = express.Router();
const BookModel= require("../models/bookModel.js")
const BookController= require("../controllers/bookController");
//const bookModel = require('../models/bookModel.js');


// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)


router.post("/createBook" , BookController.createBook)

router.get("/getBookData", BookController.getBookData)


 module.exports = router;