//! returns an array of the key/value pairs of an object
const obj = {
  Name : "Abdullah",
  Class : 10,
  age : 15
}
//? does not change the original object.
console.log(obj)
let arr = Object.entries(obj);
console.log(arr);
console.log(arr[2]); //[ 'age', 15 ]
