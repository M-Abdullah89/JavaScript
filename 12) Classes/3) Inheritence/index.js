//! Classes support inheritance using the extends keyword, allowing you to create a class that inherits from another class.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const john = new Person('Abdullah', 15);
console.log(john.greet());


class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  describe() {
    return `${this.greet()} I work as a ${this.jobTitle}.`;
  }
}

const jane = new Employee("Abdullah", 15, "Software Engineer");
console.log(jane.describe()); // "Hello, my name is Abdullah and I am 15 years old. I work as a Software Engineer."
