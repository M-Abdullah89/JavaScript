//? Copies properties from one or more source objects to a target object

const name = {
    name : "Abdullah"
}
console.log(name);

const age = {
    age : 15
}
console.log(age);

//? we can also add new properties

const person = Object.assign(name,age,{class:10});
console.log(person);
/* 
{ name: 'Abdullah', age: 15, class: 10 }
*/

//! Same properties(keys) are overwritten
const age1 = {
    age : 15,
} 
const age2 = {
    age : 20,
}
const result = Object.assign(age1,age2);
console.log(result); //* { age: 20 }