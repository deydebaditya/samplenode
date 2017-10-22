var count = function(arr){
	return 'There are '+arr.length+' elements in the array';
}
var adder = function(a,b){
	return 'The sum of two numbers is '+ (a+b);
}
//console.log(count(['a','b','c']));

module.exports.counter = count;//makes the count function available outside the module.
module.exports.add=adder;

/*
* Or we can directly write 

module.exports.counter = function(arr){//stuff//};

Similarly,

module.exports.add = function(a,b){//stuff//};

*/

/*
*Or we can make use of javascript object notation, like:

module.exports ={
	counter : count,
	adder : add
};

*/