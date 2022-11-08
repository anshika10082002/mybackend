const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

//-------------------------------------------------------//
const createUser= async function(req,res){
  try{
  let data= req.body
  // if(Object.keys(data).length!=0){
    let userCreated= await UserModel.create(data)
    res.status(201).send({status:true,data:userCreated})
//   }else{
//     res.status(401).send({data:userCreated})
//  }
  }
  catch(error){
       res.status(500).send({status:false,error:error.message})
  }
}

//-------------------------------------------------------//
const loginUser=async function(req,res){
  try{
  let emailId= req.body.emailId
  let password= req.body.password
  let user=await UserModel.findOne({emailId:emailId,password:password})
  if(!user){
    return res.status(400).send({status:false,msg:"user does not exists"})
  }
  let token= jwt.sign({userId:user._id.toString(),user:"Anshika",cohort:"FunctionUp"},"Anshika-secret-key")
  res.setHeader("x-auth-token",token)
  res.status(200).send({status:true,myToken:token})
}
catch(error){
   return res.status(500).send({status:false,error:error.message})
}
}
//--------------------------------------------------------------------------//

const getUserData= async function(req,res){ 
       
  try{
   
  let userData= await UserModel.findById(req.params.userId)
  if(!userData)
  {
    return res.status(400).send({status:false,msg:"this userid is not valid"})
  } 
  return res.status(200).send({status:true,data:userData})
}
catch(error){
    return res.status(500).send({status:false,error:error.message})
}
}  

//---------------------------------------------------------------------------//
const updateUser= async function(req,res){
  
   try{
  let userId=req.params.userId
  let userData= await UserModel.findById(req.params.userId)
  if(!userData){
    return res.status(400).send({status:false,msg:"user not found"})
  }
 
  let userDetails= req.body
  let updatedUser= await UserModel.findOneAndUpdate({_id:userId},userDetails)
  return res.status(200).send({status:true,data:updatedUser})
}
catch(error){
   res.status(500).send({status:false,error:error.message})
}
}
//----------------------------------------------------------------------------//

const deleteUser=async function(req,res){
  
try{
  let userData= await UserModel.findById(req.params.userId)
  if(!userData){
    return res.status(400).send({status:false,msg:"user not found"})
  }

  let deletedUser= await UserModel.findOneAndUpdate({_id:userData},{$set:{isDeleted:true}},{new:true})
  return res.status(200).send({status:true, data:deletedUser})
}
catch(error){
  return res.status(500).send({status:false,error:error.message})
}
}





module.exports.createUser=createUser
module.exports.loginUser=loginUser
module.exports.getUserData=getUserData
module.exports.updateUser=updateUser
module.exports.deleteUser=deleteUser


