const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {
  try{
  let token= req.headers["x-auth-token"]
  if(!token){
   return res.status(400).send({status:false,msg:"token must be present"})
  }
  let checktoken= jwt.verify(token,"Anshika-secret-key")
  if(!checktoken){
   return res.status(400).send({status:false,msg:"the token is invalid"})
    }
  
    next()
  } 
  
  catch(error){
    res.status(500).send({status:false,error:error.message})
  }
}


const authorise =  function(req, res, next) {
  try{
let currentUser= req.params.userId
let token= req.headers["x-auth-token"]
  if(!token){
    res.status(400).send({status:false,msg:"token must be present"})
  }
let checktoken= jwt.verify(token,"Anshika-secret-key")
if(!checktoken){
  res.status(400).send({status:false,msg:"the token is invalid"})
  }
  let loggedInUser= checktoken.userId
  if(currentUser!==loggedInUser)
  {
    return res.status(403).send({status:false,msg:"user is not allowed to do changes for this request"})
  }
  next()
}
catch(error){
  return res.status(500).send({status:false,error:error.message})
}
 }


 
module.exports.authenticate=authenticate
module.exports.authorise = authorise 