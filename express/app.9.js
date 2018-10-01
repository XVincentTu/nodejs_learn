var express = require('express');
var app = express();

var login = function(req,res,next){
    var _url = req.url;
    if (_url !== '/') {
        next();
    } else {
        res.send('你的登入資料有錯!');
    }
    //console.log('你是登入狀態2');
};

app.get('/',login, function(req,res){
    res.send('<html><head></head><body><h1>index</h1></body></html>');
});

/**
app.use(function(req,res,next){
    res.status(404).send('抱歉，您的頁面找不到');
});

app.use(function(err, req,res,next){
    //console.error(err.stack);
    res.status(500).send('程式有問題，請稍後嘗試');
});
*/

// listen port
var port = process.env.PORT || 3000;
app.listen(port);