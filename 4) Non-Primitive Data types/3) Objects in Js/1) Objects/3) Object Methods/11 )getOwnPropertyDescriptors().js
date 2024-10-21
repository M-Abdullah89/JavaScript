//! returns the property descriptors of an object (more than one)
const person = {
  name: "Abdullah",
  age: 50,
};

// Get Properties
let descriptors = Object.getOwnPropertyDescriptors(person,"name","age");
console.log(descriptors)
