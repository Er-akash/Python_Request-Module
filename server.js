// Run code on another machine 
//create simple server to access the data
// You need to install node.js,Express.js 
var express = require('express');

var app = express();

app.use(express.json());

app.post('/', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

//app.listen(3001);
//const PORT = process.env.PORT || 3001
//app.listen(PORT,console.log(`Running on port ${PORT}`));
app.listen(3001,'0.0.0.0', function(){

console.log('Listening on Port: ' +30001)

});
