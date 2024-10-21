//! typed array is an array-like buffer of binary data.
//? There is no JavaScript property or object named TypedArray, but properties and methods can be used with typed array objects:

const arr = new Int8Array(10);
console.log(arr)
console.log(typeof arr)
//! Typed arrays are not arrays.
console.log(Array.isArray(arr)) //*false

//! Many array methods (like push and pop) are not supported by typed arrays.
//? following are types of arrays 
//? they have some minor differences of ranges

const myArr = new Int8Array(2);
console.log(myArr)
const myArr2 = new Uint8Array(10);
console.log(myArr2)
const myArr3 = new Uint8ClampedArray(10);
console.log(myArr3)
const myArr4 = new Int16Array(10);
console.log(myArr4)
const myArr5 = new Uint16Array(10);
console.log(myArr5)
const myArr6 = new Int32Array(10);
console.log(myArr6)
const myArr7 = new Uint32Array(10);
console.log(myArr7)
const myArr8 = new Float32Array(10);
console.log(myArr8)
const myArr9 = new Float64Array(10);
console.log(myArr9)
const myArr10 = new BigInt64Array(10);
console.log(myArr10)
const myArr11 = new BigUint64Array(10);
console.log(myArr11)
