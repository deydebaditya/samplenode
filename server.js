var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200);
	res.write("The server is up and running!");
	setTimeout(function(){
		res.write("Blabla");
		res.end();
	},5000);//this callback will be called after timeout of 5 seconds
	//res.end();
}).listen(3000);
console.log('Server is running!');

//We have two events here. A request event and a timeout event, which will be creeated for
//each new request and whih will be called back in 5 seconds.