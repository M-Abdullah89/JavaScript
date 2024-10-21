const arr = [1,2,3,4,5,6,7,8,9,0];
// ? copies array elements to another position in an array.

const copiedArr = arr.copyWithin(3,0);

// ? does not create a new Array.

console.log(copiedArr);
console.log(arr);

// ? does not add items to the array.







// !
//? Syntax
//* array.copyWithin(target, start, end)