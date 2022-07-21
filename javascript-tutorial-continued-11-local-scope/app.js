// Local Scope
// can not be access from outside code blocks
// if - NOT VAR

let name = 'bobo';

function calculate() {
	const name = 'john';
	// return name;

	const age = 25;
	// code goes here
	becomesGlobal = 'global variable';
}

// console.log(age);
calculate();
// console.log(age);
console.log(becomesGlobal);

if (true) {
	const name = 'john';
}

{
	const name = 'john';
	const special = 'special';
	becomesGlobal2 = '2nd global variable';
}

console.log(`my name is ${name} and I'm awesome`);

console.log(becomesGlobal2);

console.log(special);
