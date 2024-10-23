//! Getters allow you to define a method that acts like a property. When you access this property, the getter method is invoked. It’s defined using the get keyword.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person = new Person('John', 'Doe');
console.log(person.fullName); // John Doe

//! In this example, fullName is a getter. When you access person.fullName, it calls the fullName method and returns the computed full name.
