//! Methods are properties of an object which are functions.
//? The value of this inside a method is equal to the calling object.
//  In simple words, this value is the object “before dot”, the one used to call the method.

const obj = {
  FullName: "Abdullah",
  key: function () {
    console.log(this);
  },
  key2: function () {
    console.log(this.FullName);
  },
};
//? The value of this in the method is the object obj.
obj.key(); // logs `obj`
obj.key2(); // logs Abdulah
