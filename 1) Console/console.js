// ! Logging a string

console.log('Hello, world!');

//! Logging a number

console.log(123);

//! Logging a boolean

console.log(true);

// ! Logging a variable

let message = 'Hello, world!';
console.log(message);

//! Logging multiple values

console.log('Hello', 'world!', 123, true);

//! Logging an array

console.log([1, 2, 3]);

//! Logging an object

console.log({name: 'Abdullah', age: 15});

//! Methods of console
console.error('This is an error message'); //error
console.warn('This is a warning message'); //warning
// console.clear(); //clear console
console.table(['Apple', 'Banana', 'Mango']); //table

// ! Creating a group
console.group('Simple Group');
console.log('Hello');
console.log('World');
console.groupEnd('Simple Group'); //group