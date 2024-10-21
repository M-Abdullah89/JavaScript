//! returns the function that created the Object prototype

//? For JavaScript objects the constructor property returns:
//* function Object() { [native code] }

const obj1 = {
    fullName : "Abdullah",
    age: 15,
    class: 15,
  };
  
console.log(obj1.constructor)

const obj2 = {}
console.log(obj2.constructor)