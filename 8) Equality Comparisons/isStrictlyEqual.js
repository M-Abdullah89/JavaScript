//! Strict equality (===)
//? checks whether its two operands are equal, returning a Boolean result.
//? strict equality operator always considers operands of different types to be different.
console.log(0 === false); //* false
console.log('1' === 1); //* false
console.log(null === undefined)  //*false
console.log(+0 === -0)  //* true