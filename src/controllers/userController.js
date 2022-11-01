//const UserModel= require("../models/userModel")



const getIpAddress= async function (req, res) {
    
    res.send({msg:"this is for IP address"})
       
}


const getCurrentTime= async function(req,res){
    
    res.send({msg:"this api is for current time"})
}


const getPath= async function(req,res){
    
    res.send({msg:"this api is for getting path name"})
}





module.exports.getIpAddress=getIpAddress
module.exports.getCurrentTime=getCurrentTime
module.exports.getPath=getPath













//session related---
// const basicCode= async function(req, res) {
//     let tokenDataInHeaders= req.headers.token
//     console.log(tokenDataInHeaders)

//     console.log( "HEADER DATA ABOVE")
//     console.log( "hey man, congrats you have reached the Handler")
//     res.send({ msg: "This is coming from controller (handler)"})
//     }






// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }
// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
// module.exports.basicCode= basicCode
