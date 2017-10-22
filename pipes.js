//A more efficient ans quicker way to transfer data, other than streams is pipes

var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/junk.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/newJunkUsingPipe.txt', 'utf8');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	myReadStream.pipe(res);//Writing to client stream 'res' instead of a writeStream
});

server.listen(3333);

//myReadStream.pipe(myWriteStream);//Listening to data coming from readStream and redirecting it to the WriteStream.
