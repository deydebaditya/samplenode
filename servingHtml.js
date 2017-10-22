var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
	myReadStream.pipe(res);
});
server.listen(3333);
console.log('Node server listening to port 3333');