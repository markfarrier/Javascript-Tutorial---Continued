// Global Scope vs Local Scope
// any variable outside code block {} is said to be in Global Scope
// can be accesss anywhere in the program
// Gotchas : name collisions, modify by mistake

let name = 'bobo';
name = 'peter';

// const name = 'john';
// const name1 = 'john';
// const name2 = 'john';

function calculate() {
	// some other code...
	console.log(name);
	name = 'orange';
	function inner() {
		name = 'inner name value';
		console.log(`this is from inner function ${name}`);
	}
	inner();
}
calculate();

console.log(`my name is ${name} and I'm awesome`);

if (true) {
	// some other code...
	console.log(name);
	name = 'pants';
}

console.log(`my name is ${name} and I'm awesome`);
