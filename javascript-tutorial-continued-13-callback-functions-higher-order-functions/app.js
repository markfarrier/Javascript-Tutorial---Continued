// Callback Functions, Higher Order Functions, Functions as First Class Objects/Citizens
// Functions are first class objects - can be stored in a variable (expression), can passed as an argument to another function, can return function from the function (closure)

// Higher Order function - if function accepts another function as an argument or returns another function as a result, it is a higher order function

// Callback Function - if function is passed to a another function as an an argument and executed inside that function, it is a callback function

// function morning(){
//     console.log(`Good morning bob`);
//     return(`Good morning bob`);
// }
// function afternoon(){
//     console.log(`Good afternoon bob`);
//     return(`Good morning bob`);
// }

function morning(name) {
	return `Good morning ${name.toUpperCase()}`;
}
function afternoon(name) {
	// return `Good afternoon ${name.toUpperCase()}`;
	return `Good afternoon ${name.repeat(3)}`;
}

function greet(name, cb) {
	const myName = 'john';
	console.log(`${cb(name)}, my name is ${myName}`);
}

// greet('bobo', morning()); // don't do this
greet('bobo', morning);
greet('peter', afternoon);

// function greetMorning(name) {
// 	const myName = 'john';
// 	console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name) {
// 	const myName = 'susan';
// 	console.log(`Good afternoon ${name}, my name is ${myName}`);
// }

// greetMorning('bob');
// greetAfternoon('bob');
