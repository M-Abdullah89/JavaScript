//! super keyword is  Used to call the parent class's constructor or methods.

// Parent class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Child class
class Dog extends Animal {
  constructor(name, breed) {
    // Call the parent class's constructor with 'super'
    super(name); // Calls the constructor of Animal
    this.breed = breed;
  }

  speak() {
    // Call the parent class's speak method with 'super'
    super.speak(); // Calls the speak method of Animal
    console.log(`${this.name} barks.`);
  }
}

// Creating an instance of Dog
const dog = new Dog("Rex", "German Shepherd");

// Calling the speak method
dog.speak();
