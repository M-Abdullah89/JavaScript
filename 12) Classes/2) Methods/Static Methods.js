//! Static Methods
//? Static methods are called on the class itself, not on instances of the class. They are defined using the static keyword.

class Calculator {
  static add(a, b) {
    return a + b;
  }
}
console.log(Calculator.add(5, 3)); // 8

//! Static methods in JavaScript are functions that belong to the class itself rather than to instances of the class. You call them on the class, not on an instance of the class, using the static keyword

class MathUtils {
  // Static method to calculate factorial
   static factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Base case: 0! = 1 and 1! = 1
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

// Using the static method without creating an instance of MathUtils
console.log(MathUtils.factorial(5)); // Output: 120
console.log(MathUtils.factorial(0)); // Output: 1
console.log(MathUtils.factorial(-1)); // Output: undefined

//! Static methods are like the calculator. You don’t attach them to any specific problem, but you use them whenever you need them. They’re part of a toolkit you carry around, ready to solve problems on the spot, without needing a specific contex