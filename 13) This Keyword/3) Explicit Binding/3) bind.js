function greet(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: 'Abdullah' };

// Using the bind method to create a new function with 'this' bound to 'person'
const boundGreet = greet.bind(person, 'Hello', '!');

// Calling the bound function
boundGreet(); // Output: Hello, my name is Abdullah!

const boundGreet2 = greet.bind(person, 'Hi');
boundGreet2("?"); // Output: Hi, my name is Abdullah?
