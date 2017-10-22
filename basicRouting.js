var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/index.html').pipe(res);
	}
	else if(req.url==='/contact'){
		res.writeHead(200,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/contact.html').pipe(res);
	}
	else if(req.url === '/api/deba'){
		var objs=[{name: 'Debaditya Dey',age: 21},{name: 'Aliasghar Vali',age: 22}];
		res.writeHead(200,{'Content-Type':'application/json'});
		res.end(JSON.stringify(objs));
	}
	else{
		res.writeHead(404,{'Content-Type':'text/html'});
		fs.createReadStream(__dirname+'/404.html').pipe(res);
	}
	//res.end('Feed me popcorn');
});
server.listen(3333);
console.log('Node server listening to 3333');