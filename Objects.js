//example
// const person = {
// 	name: 'Abdulah',
// 	lastName: 'Eminovic',
// 	age: 19,
// 	arr: [1, 2, 3, 4],
// 	fullName: function () {
// 		return this.name + this.lastName;
// 	},
// 	godinaRodjenja: function () {
// 		return 2022 - this.age;
// 	},
// };
// console.log(person.lastName);
// console.log(person['name']);
// console.log(person.fullName());
// person.height = 191;
// for (let i in person) {
// 	console.log(i, person[i]);
// }
// let punoletan = false;
// for (let i in person) {
// 	if (i == 'age' && person.age >= 18) {
// 		punoletan = true;
// 	}
// }
// if (punoletan) {
// 	console.log('Person je punoletan');
// } else {
// 	console.log('Person nije punoletan');
// }

// const a = {
// 	a: 'b',
// 	b: 'a',
// };
// let b = { ...a };
// b.b = 'c';
// console.log(b);
// console.log(a);

// var student = {
// 	name: 'David Rayy',
// 	sclass: 'VI',
// 	rollno: 12,
// };
// let duzinaObjekta = 0;
// for (const i in student) {
// 	duzinaObjekta++;
// }
// console.log(duzinaObjekta);

// var library = [
// 	{
// 		author: 'Bill Gates',
// 		title: 'The Road Ahead',
// 		readingStatus: true,
// 	},
// 	{
// 		author: 'Steve Jobs',
// 		title: 'Walter Isaacson',
// 		readingStatus: true,
// 	},
// 	{
// 		author: 'Suzanne Collins',
// 		title: 'Mockingjay: The Final Book of The Hunger Games',
// 		readingStatus: false,
// 	},
// ];

// for (let i = 0; i < library.length; i++) {
// 	if (library[i].readingStatus) {
// 		console.log(
// 			`I have alreay read "${library[i].title}" by ${library[i].author}.`
// 		);
// 	} else {
// 		console.log(
// 			`I haven't read "${library[i].title}" by ${library[i].author}.`
// 		);
// 	}
// }

// let pi = 3.1415;
// const cylinder = {
// 	r: 5.3,
// 	h: 4.4,
// };

// let V = pi * cylinder.r * cylinder.r * cylinder.h;
// V = Math.round(V * 10000) / 10000;

// console.log(V);

// var library = [
// 	{
// 		title: 'The Road Ahead',
// 		author: 'Bill Gates',
// 		libraryID: 1254,
// 	},
// 	{
// 		title: 'Walter Isaacson',
// 		author: 'Steve Jobs',
// 		libraryID: 4264,
// 	},
// 	{
// 		title: 'Mockingjay: The Final Book of The Hunger Games',
// 		author: 'Suzanne Collins',
// 		libraryID: 400,
// 	},
// ];

// library.sort((a, b) => b.libraryID - a.libraryID);

// console.log(library);

// let obj = {
// 	author: 'Bill Gates',
// 	title: 'The Road Ahead',
// 	readingStatus: true,
// };

// let niz = [];

// for (const i in obj) {
// 	niz.push([i, obj.[i]]);
// }
// console.log(niz);
