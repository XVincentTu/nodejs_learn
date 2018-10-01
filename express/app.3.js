var express = require('express');
var app = express();

app.get('/user/edit-profile', function(req, res){
   res.send('<html><head></head><body><h1>Edit Profile</h1></body></html>');
});

app.get('/user/edit-photo', function(req, res){
   res.send('<html><head></head><body><h1>Edit Photo</h1></body></html>');
});

// listen port
var port = process.env.PORT || 3000;
app.listen(port);