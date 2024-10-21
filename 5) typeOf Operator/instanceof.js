// ! The instanceof operator returns true if an object is of specified type or not

const time = new Date();

console.log((time instanceof Date));
//? true

const fruits = ["apples", "bananas", "oranges"];

console.log((fruits instanceof Array));
//? true

const fruits2 = ["apples", "bananas", "oranges"];

console.log((fruits instanceof Object));
//? true