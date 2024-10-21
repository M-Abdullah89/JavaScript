//!  collection of unique values.
//? Each value can only occur once in a Set.

//! You can create a JavaScript Set by:

//? Passing an Array to new Set()
const letters = new Set(["a","b","c"]);
console.log(letters)

//? Create a Set and use add() to add values
const letters2 = new Set();


letters2.add("a");
letters2.add("b");
letters2.add("c")
console.log(letters2)
console.log(typeof letters2)//object