function greet(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

const person = { name: 'Abdullah' };

// Using the apply method with multiple arguments passed as an array
greet.apply(person, ['Hello', '!']); // Output: Hello, my name is Abdullah!
