//! toString() method returns an object as a string
//? same as in array

const person = {
    name : "Abdullah",
    age: 15,
    class : 10
};
const keys = Object.toString(person);
console.log(keys)
//! "always" returns the object constructor.


//! returns "[object Object]" if it cannot return a string
const keys2 = Object.toString(person);
console.log(keys)