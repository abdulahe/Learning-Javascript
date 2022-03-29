// const addRow = (row) =>{
//     let sum = 0;
//     for(let i = 0; i<row.length; i++){
//         sum += row[i];
//     }
//     return sum;
// }

// const order = (arr) =>{
//     let newArr = [];
//     while(arr.length>0){
//         let min = addRow(arr[0]);
//         let minInd = 0;
//         for(let j = 1; j<arr.length; j++){
//             if(min > addRow(arr[j])){
//                 min = addRow(arr[j]);
//                 minInd = j;
//             }
//         }
//         newArr.push(arr[minInd]);
//         arr.splice(minInd,1);
//     }
//     return newArr;
// }

// let arr = [
//     [4,2,3],//9
//     [5,2,1],//8
//     [2,3,1],//6
//     [5,2,3]//10
// ]
// console.log(order(arr));

//1

// const is_array = (arr) => {
//     return Array.isArray(arr);
// }

// console.log(is_array(2));

//4

// const last = (arr, n) =>{
//     if(typeof(n) != "number") return arr[arr.length-1];
//     return arr.slice(-n);
// }

// console.log(last([2,3,4,5,6]));

//5

// let myColor = ["Red", "Green", "White", "Black"];

// myColor = myColor.join("+");

// console.log(myColor);

//7
// let arr = [5,4,2,7,8,-4,-3,-1];
// arr.sort((a,b) => a-b);
// arr = arr.join(",")
// console.log(arr);

//Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null

// let arr = [false,,5,3,0,"0","",null];
// let i = 0;
// while(i<arr.length){
//     if(typeof(arr[i]) === "undefined" || arr[i] === false || arr[i] === "" || arr[i] == 0 || arr[i] === null){
//         arr.splice(i,1);
//         continue;
//     }
//     i++;
// }
// console.log(arr);

// let arr = ['pizza','hamburger','pilav'];

// arr[0] = 'koushari';
// arr[1] = 'tortilla';

// arr.splice(0,0,'Pasta');

// console.log(arr);

// let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
// let myArray = myString.split('+');
// let arrayLength = myArray.length;
// let lastItem = myArray[arrayLength-1];
// console.log(myArray);

//Imagine the supplied array is like a pack of cards.
//Write a function to shuffle this array in to a completely new and entirely random order,
//much like shuffling a pack of cards.

// const shuffle = (arr) =>{
//     let newArr = [];
//     while(arr.length > 0){
//         let x = Math.floor((Math.random() * arr.length) + 0);
//         newArr.push(arr[x]);
//         arr.splice(x,1);
//     }
//     return newArr;
// }

// console.log(shuffle([5,2,3,1,4]));

// const mix = (firstArray, secondArray) => {
//     let newArr = [];
//     while(firstArray.length > 0 || secondArray.length > 0){
//         if(firstArray.length > 0){
//             newArr.push(firstArray[0]);
//             firstArray.splice(0,1);
//         }
//         if(secondArray.length > 0){
//             newArr.push(secondArray[0]);
//             secondArray.splice(0,1);
//         }
//     }
//     return newArr;
// }

// console.log(mix([1, 2, 3], [4, 5, 6]))
// console.log(mix(["h", "a", "c"], [7, 4, 17, 10, 48]))

// const findSmallestAndLargestNumbers = (someArray) => {
//     let max = someArray[0];
//     let min = someArray[0];
//     for(let i = 1;i<someArray.length;i++){
//         if (someArray[i] < min) {
//             min = someArray[i]
//         } else if (someArray[i] > max) {
//             max = someArray[i];
//         }
//     }
//     return [min,max].join(", ")
// }

// console.log(findSmallestAndLargestNumbers([14, 28, 3, 8, 2]))
// 2, 28

// const onlyUnique = (arr) => {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         let ponavlja = 0;
//         for(let j = 0; j < arr.length;j++){
//             if(arr[j] === arr[i]) ponavlja++;
//         }
//         if(ponavlja === 1) newArr.push(arr[i]);
//     }
//     return newArr;
// }

// console.log(onlyUnique([1, 1, 1, 2, 3, 3, 4, 4, 5])) // [2, 5]

// [["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]

// const onlyUnique = (arr) => {
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         let count = 0;
//         arr.forEach(element => {
//             if (element === arr[i]) {
//             count += 1;
//             }
//         });
//         if(count === 1) newArr.push(arr[i]);
//     }
//     return newArr;
// }

// console.log(onlyUnique([1, 1, 2, 3, 3, 4, 4, 5])) // [2, 5]

// const alphabetize = (arr) => {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i].sort((a, b) => a.localeCompare(b));
// 	}
// 	arr.sort((a, b) => a[0].localeCompare(b[0]));
// 	return arr;
// };

// const jumbledAlphabetically = [
// 	['e', 'd', 'f'],
// 	['a', 'c', 'b'],
// 	['m', 'o', 'n'],
// ];
// console.log(alphabetize(jumbledAlphabetically));


