var express = require('express');
var app = express();
//增加靜態檔案的路徑
app.use(express.static('public'));

var engine = require('ejs-locals');
app.engine('ejs',engine);
app.set('views','./views/');
app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('index',{
        'title':'六角學院',
        'boss':'liao'
    });
});

app.get('/user',function(req,res){
    res.render('user');
});

// listen port
var port = process.env.PORT || 3000;
app.listen(port);