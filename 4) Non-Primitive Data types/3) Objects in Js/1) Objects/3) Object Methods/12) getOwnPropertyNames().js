//! returns an array with the properties(keys) of an object
//! does not change the original object

const person = {
    name : "Abdullah",
    age: 15,
    class : 10
  };
  
  // Get Properties
  let props = Object.getOwnPropertyNames(person);
  console.log(props)