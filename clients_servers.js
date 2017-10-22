var http = require('http');

var server = http.createServer(function(req, res){
	console.log('Request was made '+req.url);
	res.writeHead(200, {'Content-Type':'text/html'}/*this is an object which we pass*/);
	res.end('<b>Hello! This is my response!</b>');
});

server.listen(3333, '127.0.0.1');

console.log('Listening to port 3333!');