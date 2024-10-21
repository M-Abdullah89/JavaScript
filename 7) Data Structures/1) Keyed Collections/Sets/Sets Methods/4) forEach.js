//! calls a function for each set element:

//? does not change the original set.

const letters = new Set(["a","b","c"]);


let a = letters.forEach (function(value) {
  console.log(value);
})