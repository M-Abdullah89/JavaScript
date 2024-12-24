//! for in loops iterate over the enumerable properties of an object. this inside the loop refers to the context of where it's called.

const obj = {
  a: 1,
  b: 2,
  c: 3,
  logProps: function () {
    for (const key in this) {
//?The key variable will hold the name of each property (a, b, c, and logProps).
//? this refers to obj

if (this.hasOwnProperty(key)) {
//?the hasOwnProperty method check if the property is a directproperty of the object (obj) and not inherited from itsprototype chain.
//? this keyword: In the context of the logProps method, thisrefers to the obj object. It allows the method to access theproperties and methods of obj.

console.log(`${key}: ${this[key]}`); // refers to `obj`

//*  this[key] refers to `obj[key]` & ${key} refers to a,b,c and logProps

      }
    }
  },
};

obj.logProps(); // logs "a: 1", "b: 2", "c: 3", "logProps: function..."
