//! method returns an array of the  values of an object.
//? does not change the original object.

const person = {
    name : "Abdullah",
    age: 15,
    class : 10
};

const arr =  Object.values(person);
console.log(arr) //* [ 'Abdullah', 15, 10 ]

arr.forEach(i => {
    console.log(i)
});

/* 
    Abdullah
    15
    10
*/