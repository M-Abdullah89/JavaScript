//! returns an array with the keys of an object.

const person = {
    name : "Abdullah",
    age: 15,
    class : 10
};

const keys = Object.keys(person);
console.log(keys)

/*
0: "name"
1: "age"
2: "class"
 */

// ! to return only keys we can use a trick
keys.forEach((i) => console.log(i))
/* 
 name
 age
 class 
 */
