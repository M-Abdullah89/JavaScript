//? returns an array from any object with a length property.


const text = "Abdullah"

const arr = Array.from(text);
console.log(arr);

//? returns an array from any iterable object.


//! Array.from() is a static property of the JavaScript Array object.
//! You can only use it as Array.from().
//! Using x.from(), where x is an array will return undefined.