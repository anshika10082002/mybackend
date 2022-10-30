const express = require('express');
const router = express.Router();

const AuthorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const PublisherController = require("../controllers/publisherController")



router.post("/createAuthor" ,AuthorController.createAuthor )

router.post("/createPublisher" , PublisherController.createPublisher)

router.post("/createBook" , BookController.createBook)

router.get("/getBooksWithAuthorAndPublisherDetails",BookController.getBooksWithAuthorAndPublisherDetails)

router.put("/updatePublisherkey" ,BookController.updatePublisherkey)

router.put("/increasePublisherPrice" ,BookController.increasePublisherPrice)





module.exports = router;