var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(express.static(__dirname + '/website'));

//Set view engine

//Routing
app.get("/", function(req, res){
  res.sendFile(__dirname + 'index.html');
})

//Launch application
app.listen(8000, function(){
  console.log("Starting a server on localhost:8000");
});
