//? The call() method allows function calls, belonging to one object to be assigned and it is called for a different object

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
    console.log(this)
};

// The object to be used as the current object. (person)
// A list of arguments to be passed to the method. ("Hello")
greet.call(person, "Hello"); 
//! This process is called function borrowing 