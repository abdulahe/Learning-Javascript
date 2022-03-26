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
