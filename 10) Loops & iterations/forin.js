//! for in statement loops through the properties of an Object:

/* 
for (key in object) {
   code block to be executed
}
*/

const person = {
  name: "Abdullah",
  class: 10,
  age: 15,
};

let text = "";

for (const x in person) {
  text = person[x];
  console.log(x,text);
}

/* 
name Abdullah
class 10
age 15  
 */