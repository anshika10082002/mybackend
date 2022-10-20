const express = require('express');
const router = express.Router();

// assignment===
let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
  
  router.post("/vote",function(req,res){
    const age  = req.query.age
    const finalArr=[]
    for( let i=0; i<persons.length; i++){
        if(persons[i].age >= age){
            persons[i].votingStatus = true
            finalArr.push(persons[i]) 
        }
        else{
            persons[i].votingStatus = false
        }
    }

    res.send({data:finalArr})

  })
 


module.exports = router;