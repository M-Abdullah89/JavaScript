//! Static Methods
//? Static methods are called on the class itself, not on instances of the class. They are defined using the static keyword.

class BasicMath {
  static PI = 3.1415;

  static Diameter(rad) {
    return 2 * rad;
  }
  static sum(a, b) {
    return a + b;
  }
  static area(radius) {
    return this.PI * radius * radius;
  }
}
console.log(BasicMath.Diameter(2));
console.log(BasicMath.sum(22, 22));
console.log(BasicMath.area(2));

//! Practical example

class Users {
  static userCount = 0;

  constructor(userName) {
    this.name = userName;
    Users.userCount++;
  }

  static getUserCount(){
    console.log(`There are ${this.userCount} users online`);
  }


}
console.log(`\n`)
const user1 = new Users("Abdullah");
const user2 = new Users("Goku");


console.log(user1.name); //Abdullah
console.log(user2.name);
console.log(Users.userCount); //* 2
Users.getUserCount(); //* There are 2 users online