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



