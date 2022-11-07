const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const Middleware=require("../middleware/auth")

router.post("/users", UserController.createUser)

router.post("/login", UserController.loginUser)


//router.get("/users/:userId", UserController.getUserData)
router.get("/users/:userId", Middleware.authenticate, Middleware.authorise, UserController.getUserData)

router.put("/users/:userId", UserController.updateUser)

//router.post("/users/:userId/posts", UserController.postMessage)


router.delete('/users/:userId', UserController.deleteUser)

module.exports = router;