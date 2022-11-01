const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Anshika:anshika2003@cluster0.ajpkc5u.mongodb.net/Anshika10-DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );

// app.use(
//      function ( req, res, next) {
//     let ipAddress= req.socket.remoteAddress
//      let timeStamp= new Date()
//      let route= req.path
//      console.log(ipAddress)
//      console.log(timeStamp)
//      console.log(route)
//     next();
// }
//);


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
