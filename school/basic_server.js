var http= require('http');
var server=http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'})
    res.end("<h1 style='color:red;'>Hello World!</h1>")
})

server.listen('3000','127.0.0.1')