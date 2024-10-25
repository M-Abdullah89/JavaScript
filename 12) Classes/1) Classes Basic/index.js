//! Classes are template for objects
//? Here is a basic use case of it

//! Creating Class
class Person {
  constructor(name, age, lang) {
    this.name = name; // 'this.name' refers to the 'name' property of the Person instance
    this.age = age;
    this.lang = lang;
    //? The this keyword is used to refer to the current instance of the class
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
  present() {
    console.log(`I am learning ${this.lang}`);
  }
}

//! Creating instances of class
const Abdullah = new Person("Abdullah", 15, "JS");
Abdullah.greet(); //* Output: Hello, my name is Abdullah and I am 15 years old.
Abdullah.present(); //* Output: I am learning JS
console.log("name property of instance Abdullah of class Person is: ",Abdullah.name); // Abdullah
console.log("age property of instance Abdullah of class Person is ",Abdullah.age); // 15
