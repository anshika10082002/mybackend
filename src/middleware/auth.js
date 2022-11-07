const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {
  let token= req.headers["x-auth-token"]
  if(!token){
   return res.send({status:false,msg:"token must be present"})
  }
  let checktoken= jwt.verify(token,"Anshika-secret-key")
  if(!checktoken){
   return res.send({status:false,msg:"the token is invalid"})
    }
    
    next()
  
}


const authorise =  function(req, res, next) {
let currentUser= req.params.userId
let token= req.headers["x-auth-token"]
  if(!token){
    res.send({status:false,msg:"token must be present"})
  }
let checktoken= jwt.verify(token,"Anshika-secret-key")
if(!checktoken){
  res.send({status:false,msg:"the token is invalid"})
  }
  let loggedInUser= checktoken.userId
  if(currentUser!=loggedInUser)
  {
    return res.send({msg:"user is not allowed to do changes for this request"})
  }
    next()
}

module.exports.authenticate=authenticate
module.exports.authorise =authorise 