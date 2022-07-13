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

// let flattened = [
// 	[0, 1],
// 	[2, 3],
// 	[4, 5],
// ].reduce((previousValue, currentValue) => previousValue.concat(currentValue));

// console.log(flattened);

// const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// let repetition = {};

// for (let i = 0; i < names.length; i++) {
// 	if (!repetition.hasOwnProperty(names[i])) {
// 		repetition[names[i]] = 1;
// 	} else {
// 		repetition[names[i]]++;
// 	}
// }

// console.log(repetition);

// const friends = [
// 	{
// 		name: 'name1',
// 		books: ['Book1', 'Book2'],
// 		age: 1,
// 	},
// 	{
// 		name: 'name2',
// 		books: ['Book3', 'Book4'],
// 		age: 2,
// 	},
// 	{
// 		name: 'name3',
// 		books: ['Book5', 'Book6'],
// 		age: 3,
// 	},
// ];

// let initialValue = ['Alphabet'];

// let booknames = friends.reduce(
// 	(previousValue, currentValue) =>
// 		// previousValue.concat(currentValue.books),
// 		[...previousValue, ...currentValue.books],
// 	initialValue
// );

// console.log(booknames);

// const obj = {
// 	name: 'Abdulah',
// 	age: 19,
// };
// // let {age : agee} = obj;
// let { age } = obj;
// console.log(age);

// const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

// let myNewArray = myArray.reduce((previousValue, currentValue) => {
// 	if (!previousValue.includes(currentValue)) {
// 		return previousValue.concat(currentValue);
// 	}
// 	return previousValue;
// }, []);

// console.log(myNewArray);

// let filtered = [12, 5, 8, 13, 44].filter((br) => br >= 10);
// console.log(filtered);

// const isPrime = (br) => {
// 	for (let i = 2; i < br; i++) {
// 		if (br % i == 0) return 0;
// 	}
// 	if (br > 0) return 1;
// };

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// let newArr = array.filter((br) => {
// 	if (isPrime(br)) return br;
// });

// console.log(newArr);

// const array = [5, 12, 8, 130, 40];

// let br = array.find((br) => br > 10);
// console.log(br);

// const isPrime = (br) => {
// 	for (let i = 2; i < br; i++) {
// 		if (br % i == 0) return false;
// 	}
// 	if (br > 0) return true;
// };

// let brojevi = [4, 5, 67, 8, 2];

// console.log(brojevi.find((br) => isPrime(br)));

// .every da lai svaki ispunjava uslov
// .even da li bar jedan ispunjava uslov

// let brojevi = [23, 23, 45, 22, 11];
// console.log(brojevi.every((br) => br >= 10 && br < 100));

setTimeout(()=>{
	console.log(5);
},3000);