var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'application/json'});
	var myObj = {
		name:'Debaditya Dey',
		job:'Freelancer',
		age:'21'
	};
	res.end(JSON.stringify(myObj));//parameter should either be a string or a buffer
});
server.listen(3333);
console.log('Node server listening to port 3333');