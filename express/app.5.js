var express = require('express');
var app = express();

// 某某人的音樂列表，抓前 10 筆
app.get('/user/:name/', function(req, res){
    var myName = req.params.name;
    var myItem = req.query.item;
    var myLimit = req.query.limit;
    console.log(myName+', '+myItem+' ( '+myLimit+' )');

    res.send('<html><head></head><body><h1>'+myName+' 想要找 '+myItem+' 的前 ' +myLimit+' 筆資料 )</h1></body></html>');
});

// listen port
var port = process.env.PORT || 3000;
app.listen(port);