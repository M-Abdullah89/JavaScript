//!  Syntax
//? variableDeclaration NameofArray = [Elements]

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array);

//!  accessing an index
console.log(array[2]);
//? Output will be 3

//!  Type of array
console.log(typeof array);
//? Output will be object

// ! Arrays make shallow copy

const originalArray = [1, 2, 3];
const shallowCopy = [...originalArray]; //* Shallow copy

originalArray[0] = 10; //* originalArray mein pehle element ko change kiya
console.log(originalArray); //* [10, 2, 3]
console.log(shallowCopy); //* [1, 2, 3]








//! **** Important Things to note ****
// ? Arrays in Js are Mutable .You can change their properties or elements without creating a new array.
