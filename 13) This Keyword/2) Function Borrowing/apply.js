//? The apply() method is used to write methods, which can be used on different objects. It is different from the function call() because it takes arguments as an array. 

//* for example
console.log("\n Apply \n");
console.log("\n");

const person = {
    firstName: "M",
    lastName: "Abdullah"
};

function greet(greeting) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
};

const greetings = ["Hello","Hi","AoA","Hola"]

// Use the apply method to invoke greet with person as the context (first arg)
greet.apply(person, [greetings[1]]) //* Hi, M Abdullah

//! This process is also called function borrowing 

function greet2(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
  }
  const person2 = { name: 'Abdullah' };
  greet2.call(person2, 'Hello', '!');