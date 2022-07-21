// find
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

const people = [
	{ name: 'bob', age: 20, position: 'developer', id: 1 },
	{ name: 'peter', age: 25, position: 'designer', id: 2 },
	{ name: 'susy', age: 30, position: 'the boss', id: 3 },
	{ name: 'anna', age: 35, position: 'the boss', id: 4 },
];

const names = ['bob', 'peter', 'susy'];

console.log(
	names.find(function (name) {
		return name === 'bob';
		// return name === 'zelda';
	})
);

const person = people.find(function (p) {
	// can just reuse person in the anonymous function even though it's the constant, but changed to p so it's less confusing what is happening
	return p.id === 3;
});

console.log(person.name);

const person2 = people.filter(function (person) {
	return person.id === 3;
	// return person.id === 5; // causes an error because this essentially asks for a property from an undefined (as there is no person with id=5, so undefined is what find returns when the condition is not met)
});

console.log(person2[0].name);
