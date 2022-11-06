const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
//const Middleware= require("../middleware/auth.js")


router.post("/createUser",UserController.createUser)

router.post("/login",UserController.userLogin)

//router.get("/users/:userId",UserController.getUserDetails)
router.get("/users/:userId",Middleware.auth, UserController.getUserDetails)


//router.put("/users/:userId", UserController.updateUserData)
router.put("/users/:userId",Middleware.auth, UserController.updateUserData)


//router.delete("/users/:userId",UserController.deleteUser)
router.delete("/users/:userId",Middleware.auth, UserController.deleteUser)



module.exports = router;



