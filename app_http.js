var http = require('http');

http.createServer(function(request,response){
    console.log(request.url);
    response.writeHead(200,{ "Content-Type":"text/html" });
    response.write('<h1>hello!!</h1>');
    response.end();
}).listen(8080);