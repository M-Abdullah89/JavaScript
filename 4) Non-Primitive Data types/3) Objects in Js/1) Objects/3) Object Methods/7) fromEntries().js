//! creates an object from an array of key/value pairs.

const arr = [["name","Abdullah"],["age",15],["class",10]];

const obj = Object.fromEntries(arr);
console.log(obj);