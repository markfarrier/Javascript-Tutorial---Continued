// Arrays and for loop

const names = ['anna', 'susy', 'bob'];
const lastName = 'shakeandbake';

let newArray = [];

for (i = 0; i < names.length; i++) {
	newArray.push(`${names[i]} ${lastName}`);
}

console.log(newArray);
