var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
var buf = new Buffer();
var contents = fs.readFileSync('index.html');

//buf.toString()

app.get('/', function(request, response) {
  response.send("hello making sure");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
