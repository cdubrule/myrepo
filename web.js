var express = require('express');
//var fs = require('fs');
var app = express.createServer(express.logger());
//var fs=require('fs');

//var hpage = fs.readFile('index.html');
//var hpage= fs.readFile('index.html',function(err,data){
//if (err) throw err;
//response.send(hpage);
//console.log(data);
//});

app.get('/', function(request, response) {
//response.send(hpage);
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
