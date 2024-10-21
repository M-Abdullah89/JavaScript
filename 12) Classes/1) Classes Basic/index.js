//! Classes are template for objects

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const john = new Person('Abdullah', 15);
john.greet(); // Output: Hello, my name is Abdullah and I am 15 years old.