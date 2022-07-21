// Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	// console.log(total);
	if (total > 100) {
		console.log(`Whoa! You are spending way too much`);
		// return;
		return total;
	}
	//  else {
	// 	console.log(`You are good.  Total is less than 100`);
	// }
	console.log(`You are good.  Total is less than 100`);

	return total;
}

calculateTotal(gas);
const gasTotal = calculateTotal(gas);
calculateTotal(food);
const foodTotal = calculateTotal(food);
// calculateTotal('hello world'); // string is an array of individual characters

const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log({ gas: gasTotal, food: foodTotal, random: randomTotal });
