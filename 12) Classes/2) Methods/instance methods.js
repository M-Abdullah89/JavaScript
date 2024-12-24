class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDescription() {
    return `${this.make} ${this.model}`;
  }
}
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.getDescription()); // Toyota Corolla

//? In this example, getDescription is an instance method. When you call myCar.getDescription(), it uses the make and model properties of the myCar instance.