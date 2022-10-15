const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')

const mylogger = require('../logger/logger.js')
const myhelper = require('../util/helper.js')
const myvalidator = require('../validator/formatter')

///
//importing external package
const underscore = require('underscore')
const lodash = require('lodash')
//
router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
////
     //logger.js====  
    console.log("Welcome:-",mylogger.welcome())

    //helper.js===
    console.log("date:-" , myhelper.printDate())
    console.log("month:-",myhelper.printMonth())
    console.log("getBatchInfo:-",myhelper.myBatchInfo())

    //validator.js
    console.log("getString:-",myvalidator.myStirng())
    console.log("changeToLowerCase:-",myvalidator.myName1())
    console.log("changeToUpperCase:-",myvalidator.myName2())

////
        //----external package lodash----//

    //using chunk function----
   let months = ["January","february","March","April","May","June","July","August","September","October","November","December"]
    let myResult= lodash.chunk(months,4)
    console.log("My sub-array of months:-",myResult)

    //using tail function----
        let oddnum = [1,3,5,7,9,11,13,15,17,19]
        let myResult1 = lodash.tail(oddnum)
        console.log("my last 9th element:-",myResult1)

     //union function---
     let arr1 = [1,2,1]
     let arr2 = [3,2,4]
     let arr3 = [2,5,3]
     let arr4 = [2,5,6]
     let arr5 = [7,2,3]
     let myResult2 = lodash.union(arr1,arr2,arr3,arr4,arr5)
     console.log("my merged array of unique value:-",myResult2)

     //using fromPairs function-----
    let myPairs=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    let myResult3= lodash.fromPairs(myPairs)
    console.log("my key value pairs in an object:-", myResult3)

    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

