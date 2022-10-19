const express = require('express');

const router = express.Router();

//problem 1===
// -write an api which gives the missing number in an array of integers starting from 1....
//e.g [1,2,3,5,6,7]: 4 is missing
router.get("/sol1", function (req, res){
    let arr1= [1,2,3,5,6,7]
 let n =  arr1.length+1
 let sumOfAllNumber= n*(n+1)/2 
 let  sumOfNumber=0

for(let i=0; i<arr1.length;i++){
 
    sumOfNumber = sumOfNumber + arr1[i]

}
let missingNumber1 = sumOfAllNumber - sumOfNumber
res.send( { data: missingNumber1 } );

});


//problem 2===
// -write an api which gives the missing number in an array of integers starting from anywhere....
//e.g [33,34, 35, 37, 38]: 36 is missing

router.get("/sol2", function (req, res){
let arr2= [33, 34, 35, 37, 38]
let n = arr2.length+1
let sum_Of_n_consicutive_Number= (n*(33+38)/2)
 let  sumOfNumberOfArray=0
 for (let i=0; i<arr2.length; i++){
     sumOfNumberOfArray = sumOfNumberOfArray + arr2[i]
 }
let missingNumber2= sum_Of_n_consicutive_Number - sumOfNumberOfArray
res.send( { data: missingNumber2 } );

});

module.exports = router;
