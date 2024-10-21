//! A Map holds key-value pairs where the keys can be any datatype.
//? A Map remembers the original insertion order of the keys
// Creating a simple map

const person = new Map([
    ["name", "Abdullah"],
    ["class", 10],
    ["age", 15]
  ]);
  
  person.set("gender", "Male");
  const key = {name : "Abdullah",
    age : 15,
    gender : "Male"
  };
  person.set(key, "This is a key");

  console.log(person);
  console.log(typeof person); //object