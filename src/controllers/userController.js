const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

//-------------------------------------------------------//
const createUser= async function(req,res){
  let data= req.body
  let userCreated= await UserModel.create(data)
  res.send({satus:true,data:userCreated})
}

//-------------------------------------------------------//
const loginUser=async function(req,res){
  let emailId= req.body.emailId
  let password= req.body.password
  let user=await UserModel.findOne({emailId:emailId,password:password})
  if(!user){
    return res.send({status:false,msg:"user does not exists"})
  }
  let token= jwt.sign({userId:user._id.toString(),user:"Anshika",cohort:"FunctionUp"},"Anshika-secret-key")
  res.setHeader("x-auth-token",token)
  res.send({status:true,myToken:token})
}
//--------------------------------------------------------------------------//

const getUserData= async function(req,res){ 
  let token= req.headers["x-auth-token"]
  if(!token){
    res.send({status:false,msg:"token must be present"})
  }

  let checktoken= jwt.verify(token,"Anshika-secret-key")
  if(!checktoken){
    return res.send({status:false,msg:"the token is invalid"})
  }

  let currentUser= req.params.userId
  let loggedInUser= checktoken.userId
  if(currentUser!=loggedInUser)
  {
    return res.send({msg:"user is not allowed to for this request"})
  }
      
  
  let userData= await UserModel.findById(req.params.userId)
  if(!userData)
  {
    return res.send({status:false,msg:"this userid is not valid"})
  } 
  return res.send({status:true,data:userData})
}

//---------------------------------------------------------------------------//
const updateUser= async function(req,res){
  let token= req.headers["x-auth-token"]
  if(!token){
    res.send({status:false,msg:"token must be present"})
  }
  let checktoken= jwt.verify(token,"Anshika-secret-key")
  if(!checktoken){
    return res.send({status:false,msg:"the token is invalid"})
  }
 
  let currentUser= req.params.userId
  let loggedInUser= checktoken.userId
  if(currentUser!=loggedInUser)
  {
    return res.send({msg:"user is not allowed to for this request"})
  }
   
  let userId=req.params.userId
  let userData= await UserModel.findById(req.params.userId)
  if(!userData){
    return res.send({status:false,msg:"user not found"})
  }
 
  let userDetails= req.body
  let updatedUser= await UserModel.findOneAndUpdate({_id:userId},userDetails)
  return res.send({data:updatedUser})
}

//----------------------------------------------------------------------------//

const deleteUser=async function(req,res){
  let token= req.headers["x-auth-token"]
  if(!token){
    res.send({status:false,msg:"token must be present"})
  }
  let checktoken= jwt.verify(token,"Anshika-secret-key")
  if(!checktoken){
    return res.send({status:false,msg:"the token is invalid"})
  }
  
  let currentUser= req.params.userId
  let loggedInUser= checktoken.userId
  if(currentUser!=loggedInUser)
  {
    return res.send({msg:"user is not allowed to for this request"})
  }

  let userData= await UserModel.findById(req.params.userId)
  if(!userData){
    return res.send({status:false,msg:"user not found"})
  }

  let deletedUser= await UserModel.findOneAndUpdate({_id:userData},{$set:{isDeleted:true}},{new:true})
  return res.send({status:true, data:deletedUser})
}





module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.getUserData=getUserData
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser


// const postMessage = async function (req, res) {
//     let message = req.body.message
//     // Check if the token is present
//     // Check if the token present is a valid token
//     // Return a different error message in both these cases
//     let token = req.headers["x-auth-token"]
//     if(!token) return res.send({status: false, msg: "token must be present in the request header"})
//     let decodedToken = jwt.verify(token, 'functionup-thorium')

//     if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
//     //userId for which the request is made. In this case message to be posted.
//     let userToBeModified = req.params.userId
//     //userId for the logged-in user
//     let userLoggedIn = decodedToken.userId
 
//     //userId comparision to check if the logged-in user is requesting for their own data
//     if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

//     let user = await userModel.findById(req.params.userId)
//     if(!user) return res.send({status: false, msg: 'No such user exists'})
    
//     let updatedPosts = user.posts
//     //add the message to user's posts
//     updatedPosts.push(message)
//     let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

//     //return the updated user document
//     return res.send({status: true, data: updatedUser})
// }

