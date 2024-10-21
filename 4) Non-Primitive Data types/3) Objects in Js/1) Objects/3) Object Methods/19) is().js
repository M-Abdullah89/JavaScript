//! method determines whether two values are the same value.
//? It is not equivalent to the == operator.
// console.log(""== false)//* true
// console.log(0== 0)//*true 
// console.log(-0 == -0)//* true
// console.log(NaN == NaN)//* false

console.log(Object.is('1', 1)); //*false

console.log(Object.is(NaN, NaN)); //*true

console.log(Object.is(-0, 0));//*false

const obj = {};
console.log(Object.is(obj, {})); //*false
