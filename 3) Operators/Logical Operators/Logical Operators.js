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

//! Logical AND and OR operators, doesn't evaluate the right-hand operand if the left-hand operand is neither null nor undefined.
//? it is called short circuiting
//? && returns  falsy operand

console.log("****************");
console.log("short circuiting");
console.log("****************");
console.log(5&&null);
console.log(5&&undefined);
console.log(5&&false);
console.log(5&&0);
console.log(5&&NaN);
console.log(5&&"");



console.log(5&&7);

//! Why 7 Is Returned:
//? The && operator's logic is to evaluate both operands and return the last value if all are truthy. In 5 && 7, 5 is truthy, so it moves to evaluate 7, and since 7 is also truthy, it is the final result.


//! || returns truthy value
console.log(0 || 7);    
console.log(false || 7);
console.log(5 || 7);     
console.log(7 || "Hi"); 

console.log(5||7);

//! Why 5 Is Returned:
//? The left-hand operand (5) is truthy, so the evaluation stops immediately without checking the right-hand operand (7).
//? The result is the first truthy value encountered, which is 5.