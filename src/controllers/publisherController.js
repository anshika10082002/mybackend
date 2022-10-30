const PublisherModel= require("../models/publisherModel")

const createPublisher= async function(req, res){
    let input = req.body
    let myPublisher = await PublisherModel.create(input)
    return res.send({msg:myPublisher})
}


module.exports.createPublisher=createPublisher