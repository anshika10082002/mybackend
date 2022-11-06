const jwt = require("jsonwebtoken");

const auth = function(req, res, next){
  let token = req.headers["x-auth-token"]
  if (!token) {
    return res.send({ status: false, msg: "token is not present" })
  }

  
  let checkValidToken = jwt.verify(token, "Anshika-secret-key");

  if (!checkValidToken) {  
    return res.send({ status: false, msg: "token is not valid" })
  }
  next()
}

module.exports.auth=auth