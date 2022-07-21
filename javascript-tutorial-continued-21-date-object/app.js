// Date

const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturtday',
];

const date = new Date();
// const date = new Date('1/12/2004');
console.log(date);

const month = date.getMonth(); // returns the month number rather than name (indexed starting at 0, so January will be 0 rather than 1)
console.log(month);

console.log(months[month]);

const day = date.getDay();
console.log(day);
console.log(days[day]);

console.log(date.getDate()); // doesn't return the date object, but rather the day of the month
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${
	months[month]
} ${date.getFullYear()}`;

document.body.innerHTML = sentence;
