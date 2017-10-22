var fs = require('fs');

//Reading and writing files

var readFile = fs.readFileSync('readMe.txt', 'utf8'); //The sync means that node will fully read this file before triggering any code below it. Blocking code.
console.log(readFile);

fs.writeFileSync('writeMe.txt', readFile+' New things');

/////////////ASYNCHRONOUS VERSIONS////////////////////

var readFile = fs.readFile('readMe.txt', 'utf8', function(err, data){
	console.log('Read Asynchronously:');
	console.log(data);
	console.log('Writing Asynchronously');
	fs.writeFile('writeMeAsync.txt', data, function(err){
		if(!err){
			console.log('Successfully written to file!');
		}
		else{
			console.log(err);
		}
	});
});

console.log('test');
