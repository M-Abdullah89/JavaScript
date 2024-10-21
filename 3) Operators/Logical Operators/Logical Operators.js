//! AND (&&)
let a = 6;
let b = 3;

let result1 = a < 10 && b > 1; // Result: true
console.log(result1);
//! OR (||)
let result2 = a == 5 || b == 5; // Result: false
console.log(result2);
//! NOT (!)
let result3 = !(a == b); // Result: true
console.log(result3);

//! Nullish Coalescing (??)
let a_name = null;
let text = "missing"; //hello this is my code
let result4 = a_name ?? text; // Result: "missing"
console.log(result4);