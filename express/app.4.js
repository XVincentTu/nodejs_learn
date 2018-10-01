var express = require('express');
var app = express();

app.get('/user/:name/:date', function(req, res){
    var myName = req.params.name;
    var myDate = req.params.date;
    console.log(myName+', '+myDate);
    if ( myName !== 'Tom' ) {
        var returnMsg = '查無此人';
    } else {
        var returnMsg = myName;
    }
    res.send('<html><head></head><body><h1>Hello '+returnMsg+' ( '+myDate+' )</h1></body></html>');
});

// listen port
var port = process.env.PORT || 3000;
app.listen(port);