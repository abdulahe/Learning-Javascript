const displayValue = (value) => {
	console.log(value);
};

// const calculator = (a, b, func) => {
// 	value = a + b;
// 	func(value);
// };

// calculator(3, 4, displayValue);

// setTimeout(() => {
// 	displayValue('timeout');
// }, 2000);

//clock

// let h = '0' + 0,
// 	m = '0' + 0,
// 	s = '0' + 0;

// increaseHour = () => {
// 	h++;
// 	if (h == 24) h = 0;
// 	if (h < 10) {
// 		h = '0' + h;
// 	}
// };

// increaseMin = () => {
// 	m++;
// 	if (m == 60) m = 0;
// 	if (m < 10) {
// 		m = '0' + m;
// 	}
// };

// increaseSec = () => {
// 	s++;
// 	if (s == 60) s = 0;
// 	if (s < 10) {
// 		s = '0' + s;
// 	}
// };

// setInterval(() => {
// 	increaseSec();
// }, 1000);
// setInterval(() => {
// 	increaseMin();
// }, 60000);
// setInterval(() => {
// 	increaseHour();
// }, 1440000);

// setInterval(() => {
// 	console.log(`${h}h ${m}m ${s}s`);
// }, 1000);

// let arr = ['dog', 'Cat', 'mouSe', 'bug'];

// let arr2 = arr.map((a) => a.charAt(0).toUpperCase() + a.slice(1).toLowerCase());

// console.log(arr2);

// let niz = [1, 2, 3, 4];
// let initialValue = 0;
// let total = niz.reduce(
// 	(previousValue, currentValue) => previousValue + currentValue,
// 	initialValue
// );
// console.log(total);

// let total = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
// 	(previousValue, currentValue) => previousValue + currentValue.x,
// 	0
// );
// console.log(total);

let flattened = [
	[0, 1],
	[2, 3],
	[4, 5],
].reduce((previousValue, currentValue) => previousValue.concat(currentValue));

console.log(flattened);
