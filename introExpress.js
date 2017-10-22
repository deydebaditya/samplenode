//Easy and flexible routing system
//Integrates with many templating engines
//Contains a middleware framework

var express = require('express');//this returns a function
var app = express();//we call the returned function and store it in a variable

app.set('view engine','ejs');//by default, when we request some views, it is going to look into the /view folder
app.get('/',function(req,res){
	res.render('index');//express is clever enough to figure out the content type
});
app.get('/contact',function(req,res){
	res.render('contact');
});

/* THIS IS NON EXPRESS WAY TO HANDLE MIDDLEWARE
//middleware is the code that runs between the request and response
app.use('/assets', function(req,res,next/*look we've finished our middleware, now go to the next middleware*){
	console.log(req.url);
	next();
});//we use this to include the static file, MIDDLEWARE
*/

/* EXPRESS WAY TO HANDLE MIDDLEWARE */
app.use('/assests',express.static('assests'));

//ROUTE PARAMETERS
app.get('/profile/:name',function(req,res){
	var data = {age: 21,job: 'Freelancer',hobbies: ['Eating','Reading','Coding	']};
	res.render('profile', {person: req.params.name, data: data});//render a view
	//the second parameter is an object with key value pairs which we pass to the html
});

//TEMPLATE ENGINES : helps to inject dynamic content into html from JS code



app.listen(3333);//listen to a port

//http method access : GET,POST,DELETE,PUT

//responsing to http requests:
//GET : app.get('route',fn)
//POST : app.post('rooute',fn)
//DELETE : app.delete('rooute',fn)