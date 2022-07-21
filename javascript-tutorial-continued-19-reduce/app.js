// reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const people = [
	{ name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
	{ name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
	{ name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500 },
	{ name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500 },
];

const total = people.reduce(function (acc, currItem) {
	console.log(`total ${acc}`);
	console.log(`current money : ${currItem.salary}`);
	acc += currItem.salary;
	return acc; // you must return this total when using reduce, as it depends on this
}, 0);
// 500);

// starts at 2nd argument, adds the return value for each item

console.log(total);
