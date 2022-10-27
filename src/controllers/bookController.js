const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require('../models/authorModel')

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const listOutBooks= async function(req,res){

    let findId = await AuthorModel.find({author_name:"Chetan Bhagat"}).select({author_id:1})
    let bookList = await BookModel.find({author_id: findId[0].author_id })
    res.send({msg:bookList})

}
const findAndUpdate = async function(req,res){
    let data=req.body
       let findAuthor = await BookModel.findOneAndUpdate(
        {author_name:"Two states"},
        {$set: data}
       // {new: true, upsert: true}
        )
    let findQuery = await AuthorModel.find({author_id:findAuthor.author_id})    
    res.send({msg:findQuery})
    
     }


     const findBooks= async function(req,res){
        let books =  await BookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
        let authorName= await AuthorModel.find({author_id:books.map(book=>book.author_id)})
         res.send({msg:authorName})
         //res.send({msg:books})
     }                           

module.exports.createBook= createBook
module.exports.listOutBooks= listOutBooks
module.exports.findAndUpdate=findAndUpdate
module.exports.findBooks=findBooks


// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// // CRUD OPERATIONS:
// // CREATE
// // READ
// // UPDATE
// // DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks
