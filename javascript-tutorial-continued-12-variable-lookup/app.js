// Variable Lookup
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
	const globalNumber = 20;
	const result = num1 + num2 + globalNumber; // first checks if there's something in the local scope, before checking global scope
	function multiply() {
		// const globalNumber = 100;
		const multiplyResult = result * globalNumber;
		console.log(multiplyResult);
	}
	// console.log(multiplyResult); // multiplyResult is unavailable outside of its local scope

	multiply();
	return result;
}

console.log(add(3, 4));
