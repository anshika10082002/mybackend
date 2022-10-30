const AuthorModel = require("../models/authorModel")
const BookModel= require("../models/bookModel")
const PublisherModel= require("../models/publisherModel")





  const createBook=async function(req,res){
 let book = req.body
  let {author ,publisher}=req.body
  if(!author){
    return res.send("This  author datail is required ")
  }
  
  if(!publisher){
    return res.send("This publisher datail is required ")
  }
  let authorIdCheck= await AuthorModel.findById(book.author)
    if(!authorIdCheck){
      return res.send("The author is not Present")
    }

 
let publisherIdCheck= await PublisherModel.findById(book.publisher)
if(!publisherIdCheck){
  return res.send("The publisher is not Present")
}
else{
    let book = req.body
    let bookCreated = await BookModel.create(book)
    res.send({data: bookCreated})
}
}



const getBooksWithAuthorAndPublisherDetails= async function(req,res){
  let getAllBooks= await BookModel.find().populate("author").populate("publisher")
  res.send({msg:getAllBooks})
}


const updatePublisherkey= async function(req,res){
  let forPublisher = await PublisherModel.find({name:{$in:["Penguin","HarperCollins"]}})
  let updation = await BookModel.updateMany({publisher:forPublisher},{$set:{isHardCover:true}})
  res.send({msg:updation})
}



const increasePublisherPrice =async function(req,res){
  let forAuthor =await AuthorModel.find({rating:{$gt:3.5}})
  let updatePrice =await BookModel.updateMany({author:forAuthor},{$inc:{price:10}})
  res.send({updated:updatePrice})
}




module.exports.createBook= createBook
module.exports.getBooksWithAuthorAndPublisherDetails=getBooksWithAuthorAndPublisherDetails
module.exports.updatePublisherkey=updatePublisherkey
module.exports.increasePublisherPrice=increasePublisherPrice

