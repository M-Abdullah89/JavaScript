const person = {
    name : "Abdullah",
    class : 10,
    age : 15,
}
//! Following are ways to access properties of an object

// objectName.property
console.log(person.age); //* 15

//objectName["property"]
console.log(person["name"]); //* Abdullah


//! Accessing properties in an nested objects(objects inside objects)

myObj = {
    name:"Abdullah",
    age:15,
    myCars: {
      car1:"lambo",
      car2:"buggati",
      car3:"porsche"
    }
  }

console.log(myObj.myCars.car1);//*lambo