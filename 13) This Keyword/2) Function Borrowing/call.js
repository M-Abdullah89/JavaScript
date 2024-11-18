//? The call() method allows function calls belonging to one object to be assigned and it is called for a different object

//* for example

// Define a person object with firstName and lastName properties

const person = {
    firstName: "M",
    lastName: "Abdullah"
};

// Define a greet function that takes a greeting argument
function greet(greeting) {
    // Log a message using the greeting and the person's name
    console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
};

// Use the call method to invoke greet with person as the context (first arg)
// and "Hello" as the argument for the greeting parameter (second arg)
greet.call(person, "Hello"); 

//! This process is called function borrowing 