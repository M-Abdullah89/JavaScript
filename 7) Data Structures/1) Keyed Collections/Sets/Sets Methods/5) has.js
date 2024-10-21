//! returns true if a specified value exists in a set.

const letters = new Set(["a", "b", "c"]);

// Does the Set contain "d"?
answer = letters.has("d");
console.log(answer); //false
