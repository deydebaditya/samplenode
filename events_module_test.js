var events = require('events');
var util = require('util');

//One of the properties exported by the module events, is the events emitter
//And we can use it to create custom events.

/*

BASIC STUFF

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
	console.log(msg);
});//The callback function will be called when someEvent, our custom event is emitted
//by out eventEmitter.

myEmitter.emit('someEvent', 'Hello There! The event was emitted!');
//This will emit someEvent, thus calling the callback function

*/

////////////////////////////////////////////////////////////////////
//Create a constructor
var Person = function(name){
	this.name = name;
};

//We want the Person to inherit the eventEmitter
//Thus anything created with Person would be able to have custom events attached to it.

util.inherits(Person, events.EventEmitter);
//We inherit the EventEmitter for all Person objects,
//so that we can attach event listeners to them.

var james = new Person('james');
var mary = new Person('mary');
var ryan = new Person('ryan');

var people=[james, mary, ryan]; //Storing the people created in an array

people.forEach(function(person){
	person.on('speak',function(msg){
		console.log(person.name+' speaks: '+msg);
	});
});//We created an event listener for each person we have created.

james.emit('speak','Hello I\'m James!');//We emit the speak event for james.
ryan.emit('speak','I just spoke!');