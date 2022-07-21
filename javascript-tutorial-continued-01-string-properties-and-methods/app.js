// String properties and methods
// wrapper String Object, don't memorize methods

// let text = 'Peter Jordan';
let text = ' Peter Jordan';
// let text = ' Peter Jordan          '; // length property will include the empty spaces
let result = text.length;
console.log(result);

console.log(text.length);
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.charAt(0));
// console.log(text.charAt(12));
console.log(text.charAt(text.length - 1));
// console.log(text.indexOf('P'));
// console.log(text.indexOf('p'));  // lowercase p not in the string so will return -1
console.log(text.indexOf('e'));
console.log(text);
console.log(text.trim()); // removes the white space.  Helpful for next method.  Cleans up the string for processing.  ToLowerCase helps with this too.
console.log(text.trim().toLowerCase().startsWith('peter'));
console.log(text.includes('eter'));
console.log(text.slice(0, 2)); // returns a substring between the two indexes.  Doesn't include 2nd index, but all values up to it
console.log(text.slice(2)); // returns a substring starting from the index up until the end of the string
// console.log(text.slice(-1));
console.log(text.slice(-3)); // negative value returns substring from the end minus the absolute value up until the end

// const person = {
//   name: 'peter', // property
//   greeting() {
//     // method
//     console.log("Hey, I'm Peter");
//   },
// };

// console.log(person);

// console.log(person.name);
// person.greeting();
