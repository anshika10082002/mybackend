const jwt = require("jsonwebtoken");
const { findOneAndUpdate } = require("../models/userModel");
const UserModel = require("../models/userModel");



const createUser = async function (req, res) {
  let userData = req.body
  let createdData = await UserModel.create(userData)
  res.send({ msg: createdData })
}


//---------------------------------------------------------------------
const userLogin = async function (req, res) {
  let email = req.body.emailId
  let password = req.body.password
  let user = await UserModel.findOne({ emailId: email, password: password })
  if (!user) {
   return res.send({ status: false, msg: "user details not found" })
  }
  let token = jwt.sign({ name: "Anshika", batch: "Lithium" }, "Anshika-secret-key")
  res.setHeader("x-auth-token", token)
  res.send({ status: true, msg: token })
}

//------------------------------------------------------------------------

const getUserDetails = async function (req, res) {
  // let token = req.headers["x-auth-token"]
  // if (!token) {
  //   return res.send({ status: false, msg: "token is not present" })
  // }

  // //console.log(token)
  // let checkValidToken = jwt.verify(token, "Anshika-secret-key");
  // if (!checkValidToken) {
  //   return res.send({ status: false, msg: "token is not valid" })
  // }

  let userId = req.params.userId
  let userDetails = await UserModel.findById(userId)
  if (!userDetails) {
    return res.send({ status: false, msg: "user not found" })
  } else {
    return res.send({ status: true, msg: userDetails })
  }
}

//----------------------------------------------------------------
const updateUserData = async function (req, res) {
  // let token = req.headers["x-auth-token"]
  // if (!token) {
  //   return res.send({ status: false, msg: "token is not present" })
  // }
  // let checkValidToken = jwt.verify(token, "Anshika-secret-key");
  // if (!checkValidToken) {
  //   return res.send({ status: false, msg: "token is not valid" })
  // }

  let userId = req.params.userId
  let user = await UserModel.findById( userId )
  if (!user) {
    return res.send({ status: false, msg: "user does not exist" })
  }
  let userData = req.body
  let updatedData = await UserModel.findOneAndUpdate({ _id: userId }, userData)
  return res.send({ status: true, updatedData })
}

//---------------------------------------------------------------
const deleteUser=async function(req,res){
  // let token = req.headers["x-auth-token"]
  // if(!token){
  //   return res.send({status:false,msg:"token must be present"})
  // }
  // let checkValidToken = jwt.verify(token, "Anshika-secret-key");
  // if (!checkValidToken) {
  //   return res.send({ status: false, msg: "token is not valid" })
  // }

  let userId= req.params.userId
  let userData= await UserModel.findById(userId)
  if(!userData){
    return res.send({status:false,msg:"this user does not exists"})
  }
  let userIsDeleted= await UserModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true}},{new:true})
  return res.send({status:true,msg:userIsDeleted})
}



module.exports.createUser = createUser
module.exports.userLogin = userLogin
module.exports.getUserDetails = getUserDetails
module.exports.updateUserData = updateUserData
module.exports.deleteUser=deleteUser












