const axios=require("axios") 

//http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>

const getWeatherData =async function(req,res){
    try{    
       // let city=req.query.q
        let tempByCity=[]
        const cities=[ "Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]  
        for(let i=0;i<cities.length;i++){
            const city= cities[i]
            let options={
                method:"get",
                url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a65571f228a4fa1e2c5f4985edab623b`
            }
            let result= await axios(options)
            tempByCity.push({city:city,temp:result.data.main.temp})
            tempByCity.sort((a,b)=>{ a.temp-b.temp})
        }
        res.status(200).send(tempByCity)
        
    }
    catch(error){
        res.status(500).send({ msg: error.message })
    }
}



module.exports.getWeatherData=getWeatherData


//(a,b)=>{return res.send(b.temp-a.temp)}