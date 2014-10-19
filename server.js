var express = require('express');
var app = express();
var port = process.env.PORT || 1337

app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log("server is up");
