var express = require('express');
var app = express();

app.get('/', function(req,res){
    res.send('<html><head></head><body><h1>index</h1></body></html>');
});

app.use(function(req,res,next){
    console.log('有人進來了!');
    kk();
    next();
});

app.use(function(req,res,next){
    res.status(404).send('抱歉，您的頁面找不到');
});

app.use(function(err, req,res,next){
    //console.error(err.stack);
    res.status(500).send('程式有問題，請稍後嘗試');
});

// listen port
var port = process.env.PORT || 3000;
app.listen(port);