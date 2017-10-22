var fs = require('fs');

//Deleting files

fs.unlink('writeMe.txt',function(err){
	if(err){
		console.log('File doesn\'t exist!');
	}
	else{
		console.log('File deleted!');
	}
});

//Directories

//Synchronous Versions
fs.mkdirSync('stuff');//creating directory
fs.rmdirSync('stuff');//removing directory

//Asynchronous Versions

fs.mkdir('stuff',function(err){
	if(!err){
		console.log('Directory created!');
		fs.readFile('readMe.txt', 'utf8', function(err, data){
			fs.writeFile('./stuff/writeMe.txt', data, function(err){
				if(!err){
					console.log('New file created!');
				}
				else{
					console.log('File creation failed!');
				}
			});
		});
	}
	else{
		console.log('Directory creation failed!');
	}
});

//Comment this aprt out if you want the above part to run,
//otehrwise it may overlap or run before in asynchronous mode.
//Deleting directories

fs.unlink('./stuff/writeMe.txt', function(err){
	if(!err){
		console.log('Removed files inside stuff');
	}
	else{
		console.log('Unable to remove files inside stuff!');
	}
	fs.rmdir('stuff', function(err){
		if(!err)
			console.log('Removed diretory stuff');
		else
			console.log('Unable to remove directory!');
	});
});