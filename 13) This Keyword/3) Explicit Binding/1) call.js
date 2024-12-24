//! Explicit binding refers to the process of explicitly setting the value of this for a function

function greet() {
    console.log(`Hello, my name is ${this.name}`);
}
const person = { name: 'Abdullah' };

greet.call(person);

//! this sets the value of this to { name: 'Abdullah' }
//? when the this.name executes it means the name property which has value Abdullah

//! ***** Now try to use console.log(this)  in greet function *****
//! what it logs : Answer here


/* //? ***** Now try to use console.log(this) in greet function by commenting/removing greet.call(person); */
//! what it logs : Answer here

//! Conclusion:
//?   we can change the value of this in a function using call method by: function.call(object);