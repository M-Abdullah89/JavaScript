//? calls a function for each element in an array.

//! Same as forEach but it creates a new array that's it 

const arr = [1,2,3,4,5];
const result = arr.map((value) => {
    return value + 1;
});
console.log(arr);
console.log(result);