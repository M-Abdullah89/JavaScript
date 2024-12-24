//! this refers to the object itself when used in its methods
const person = {
  name: "Abdullah",
  getName: function () {
    return this.name; // `this` refers to `person`
  },
};
console.log(person.getName()); //* Abdullah
