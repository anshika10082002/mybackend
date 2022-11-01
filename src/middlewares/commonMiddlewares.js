const moment= require("moment")


const mid1= function ( req, res, next) {
    let timeStamp= moment().format("YYYY-MM-DD h:mm:ss")
    let ipAddress= req.socket.remoteAddress
     let route= req.path
     console.log(timeStamp,",",ipAddress,",",route)
     
    next()
}




module.exports.mid1= mid1

