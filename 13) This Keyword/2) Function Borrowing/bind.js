function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}
const person = { name: 'Abdullah' };
const greetPerson = greet.bind(person, 'Hello');
greetPerson('!');