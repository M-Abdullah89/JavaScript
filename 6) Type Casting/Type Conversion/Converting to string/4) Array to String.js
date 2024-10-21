const arr =  [1,2,3,4,5];
console.log(arr, typeof arr) //[ 1, 2, 3, 4, 5 ] object

// const string = String(arr);
const string = arr.toString() 
console.log(string, typeof string) // 1,2,3,4,5 string 
console.log(string.length) //9
//? because there are 9 characters 1,2,3,4,5, commas included