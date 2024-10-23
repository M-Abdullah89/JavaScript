//! The constructor method is a special method for creating and initializing objects.
//? It's called automatically when a new instance of the class is created.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    //? The this keyword is used to refer to the current instance of the class
  }
}

//! Initializing Properties
console.log("****Initializing Properties****");
console.log("\n");

const john = new Person("John Doe", 30);
console.log(john.name); // John Doe
console.log(john.age); // 30

console.log("\n");

//! Default Values
//? You can also set default values for constructor parameters.
//? This is useful if some parameters are optional:

class Person2 {
  constructor(name = "Anonymous", age = 0) {
      this.name = name;
      this.age = age;
  }
}

const anonymousPerson = new Person2();

console.log("****Default Value****");
console.log("\n");

console.log("Default value of person2 name is ", anonymousPerson.name); // Anonymous
console.log("Default value of person2 age is ", anonymousPerson.age); // 0

console.log("\n");


//! Multiple Constructors
//? JavaScript classes do not support multiple constructors. However, you can work around this limitation by using default parameters or by checking the number and types of arguments in a single constructor:

console.log("****Multiple Constructors****");
console.log("\n");

class Rectangle {
  constructor(width, height) {
    // arguments are the parameters e.g Rectangle(5); 5 in this case
    if (arguments.length === 1) {
      this.width = this.height = width;
    } else {
      this.width = width;
      this.height = height;
    }
  }
}
console.log("If there is one Pararameter 5 :");
const square = new Rectangle(5);
console.log(square.width); // 5
console.log(square.height); // 5

console.log("If there is teo Pararameter 5 & 10:");
const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // 5
console.log(rectangle.height); // 10

console.log("\n");