//! The Object.isFrozen() returns true if an object is frozen.
const object  = {
    age : 15,
}
Object.freeze(object);
let text = Object.isFrozen(object);
console.log(text);// true

const object2  = {
    age : 15,
}
let text2 = Object.isFrozen(object2);
console.log(text2); // false