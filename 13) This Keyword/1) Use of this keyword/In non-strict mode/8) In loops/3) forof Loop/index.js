//! forof loops iterate over iterable objects like arrays, and this within the loop refers to the context it's called in.
//? This means that this will refer to the global object in the global scope, and the object

const obj = {
  multiplier: 2,
  numbers: [1, 2, 3],
  multiplyNumbers: function() {
    for (const number of this.numbers) { // refers to `obj`
      console.log(number * this.multiplier); // refers to `obj`
    }
  }
};

obj.multiplyNumbers(); // logs 2, 4, 6


const obj2 = {
  items: ["apple", "banana", "cherry"],
  logItems() {
    for (const item of this.items) {
      // console.log(this); //? object
      console.log(item);
    }
  },
};

obj2.logItems();



//!this keyword doesn’t inherently refer to any specific value related to the loop itself. Instead, this maintains its usual context, referring to the object that owns the method in which the forof loop resides.

