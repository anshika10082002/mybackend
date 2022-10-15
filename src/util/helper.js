function currDate(){ 
    let date= new Date()
    return date.getDate()
}
// console.log(currDate())

function currMonth(){
    let date=new Date()
    return date.getMonth()+1
}
// console.log(currMonth())

function getBatchInfo(){
    let name="Lithium"
    let week="W3D5"
    return (name+","+week+","+"the topic for today is Nodejs modules system")
}


module.exports.printDate= currDate
module.exports.printMonth= currMonth
module.exports.myBatchInfo= getBatchInfo