const express = require('express');
//const abc = require('../introduction/intro')
const router = express.Router();



// router.get('/students', function (req, res){
//     console.log("The path params in the request are : ", req.params)
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

// Example 1 for path params
//router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    //let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object

//     console.log("The path params in the request are : ", myParams)
//     res.send('The full name is ' + myParams.studentName )
// })

// Example 2 for path params

// router.get('/student-details/:name', function(req, res){
//     let requestParams = req.params
//     console.log("This is the request ", requestParams)
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
//     res.send('Dummy response')
// })
// problem 1=====
//Create an API for GET /movies that returns a list of movies.
 //Define an array of movies in your code and return the value in response.
router.get('/movies',function(req,res){
    let moviesArr = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins","Dr.Strange"]
    console.log("my movies list:-",moviesArr)
    res.send("list of movies:-"+moviesArr)
})

 //problem 2====
 //Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and 
 //it should return the movie in your array at index 1).
  //You can define an array of movies again in your api
//[‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’]
//movies/2
router.get('/movies/:indexNumber',function(req,res){
    let moviesArr2 = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins","Black Widow","Captain Marvel"]
    console.log("my movies list:-",moviesArr2)
    let index = req.params.indexNumber
    res.send("list of movies:-"+moviesArr2[index])
})

// problem 3===
//Handle a scenario in problem 2 where if the index is greater than the valid maximum value 
//a message is returned that tells the user to use a valid index in an error message.
router.get('/myMovies/:indexNumber',function(req,res){
    let moviesArr3 = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins","Black Widow","Captain Marvel"]
    const index = req.params.indexNumber
    if(index >=moviesArr3.length){
        res.send(moviesArr3[index])
       
    }
    else{
        res.send("use a valid number")
            
    }
   // console.log("my movies list:-",moviesArr3)
   
    
})


//problem 4====
//Write another api called GET /films. Instead of an array of strings define an array of movie objects this time.
 //Each movie object should have values - id, name.
//Return the entire array in this api’s response
router.get('/films',function(req,res){
    let myMovies = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       console.log("array of movies object:-",myMovies)
       res.send(myMovies)
})

 //problem 5====
 //Write api GET /films/:filmId where filmId is the value received in request path params.
 // Use this value to return a movie object with this id. In case there is no such movie present in the array,
 // return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
//  {
 // “id”: 3,
  //  “name”: “Rang de Basanti”
  // }
 //  Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’

 router.get('/films/:filmId',function(req,res){
   let movieArr = [{
        "id": 1,
        "name": "The Shining"
    }, 
    {
     "id": 2,
     "name": "Incendies"
    },
     {
     "id": 3,
     "name": "Rang de Basanti"
    },
     {
     "id": 4,
     "name": "Finding Nemo"
    }]
    let index= req.params.filmId
        if(index>=movieArr.length){
            res.send("no movie exist")
            
        }
        else{
            res.send(movieArr[index-1])
        }
    
    
 })
   
module.exports = router;