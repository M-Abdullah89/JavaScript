//! It takes two operands and returns the first operand if it is not null or undefined. Otherwise, it returns the second operand

const arr = [1,2,3,4,5]
const arr2 = []
console.log(arr2);


//? Like Logical AND, and OR operators, the Nullish Coalescing operator doesn't evaluate the right-hand operand if the left-hand operand is neither null nor undefined.


let x = (5 || 7) ?? 9;
let y = (5 && 7) ?? 9;
console.log(x);
console.log(y);
