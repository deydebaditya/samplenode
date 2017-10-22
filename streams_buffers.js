//BUFFER

/*

*Temporary storage spot for a chunk of data that is being transferred
from one place to another.

*The buffer is filled with data, then passed along

*Transfer small chunks of data at a time.

*/

//STREAM

/*

*Stream of data that flows over time

*Data flows in the stream to the buffer, when the buffer is full, it passes that
data down the stream to the target locaiton for processing

*Increases performance

*/

var http = require('http');
var fs = require('fs');

// var server = http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type' : 'text/html'});
// });
// server.listen(3333);

var myReadStream = fs.createReadStream(__dirname+'/junk.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname+'/writeJunk.txt', 'utf8');

//The createReadStream nherits the eventEmitter, and it has an event 'data', so we can listen to this event being emitted

myReadStream.on('data', function(chunk){
	console.log('New Chunk received: '+chunk);
	myWriteStream.write(chunk);
});