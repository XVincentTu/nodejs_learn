var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('<html><head></head><body><h1>index</h1></body></html>');
});

app.use(function(req,res,next){
    console.log('有人進來了!');
    next();
});

app.get('/user', function(req,res){
    res.send('<html><head></head><body><h1>user</h1></body></html>');
});

// listen port
var port = process.env.PORT || 3000;
app.listen(port);