//! additions or deletions of new properties.
//? makes existing properties non-configurable.



"use strict";
const person = {
    name : "Abdullah",
    age: 15,
    class : 10
};
Object.seal(person);



//! Object.isSealed() returns true if an object is sealed & vice versa
let res = Object.isSealed(person);
console.log(res)



//? When an object is sealed you cannot
//! Delete a property
  delete person.age; //* TypeError: Cannot delete property 'age'
//! Add a property
  person.nationality = "Pk";//* TypeError: Cannot add property nationality
//! Add properties through object method
  Object.defineProperties(person,{
    class : {value : 10},
    language : {value : "Js"},
    //* Cannot define property language
});


