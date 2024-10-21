// ! prevents adding properties to an object.
 "use strict";
const person = {
    name : "Abdullah",
    age: 15,
    class : 10
  };

  Object.preventExtensions(person);
  person.nationality = "Pk";


  Object.defineProperties(person,{
    class : {value : 10},
    language : {value : "Js"},
});

// Both will throw an error 


//? throws error in strict mode & fail silently in normal mode

//! use Object.isExtensible() to check if an object is extensible.
const res = Object.isExtensible(person);
console.log(res)//? false