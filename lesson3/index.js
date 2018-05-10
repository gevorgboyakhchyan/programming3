var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/name", function(req, res){
   res.send("<h1>name</h1>");
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.redirect('http://google.com');
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
app.get("/*", function(req, res){
   res.send("<h1>404 ERROR</h1>");
});
