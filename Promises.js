// const promise = new Promise((resolve, reject) => {
// 	let a = 9;
// 	if (a == 9) resolve('SUCCESS');
// 	else reject('REJECTED');
// });

// promise
// 	.then((message) => console.log('this is in the THEN block', message))
// 	.catch((message) => console.log('this is in the CATCH block', message));

// const promise1 = new Promise((resolve) => resolve('Promise1'));
// const promise2 = new Promise((resolve) => resolve('Promise2'));
// const promise3 = new Promise((resolve) => resolve('Promise3'));

// Promise.all([promise1, promise2, promise3])
// 	.then((message) => console.log(message))
// 	.catch((message) => console.log(message));

// function resolve(value, ms) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => resolve(value), ms);
// 	});
// }

// function reject(reason, ms) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => reject(reason), ms);
// 	});
// }

// Promise.race([
// 	reject(new Error('bad error'), 1000),
// 	resolve(2, 2000),
// 	resolve(222222, 3000),
// ])
// 	.then((value) => console.log(value))
// 	.catch((error) => console.log(error.message));

const sayHello = async (t) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(console.log('Hello my friend')), t);
	});
};

const greeting = async (t) => {
	await sayHello(t);
	console.log(5);
};

greeting(2000);
