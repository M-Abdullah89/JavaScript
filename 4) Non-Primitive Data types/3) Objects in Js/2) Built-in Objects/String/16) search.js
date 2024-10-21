//! matches a string against a regular expression
//? returns the index (position) of the first match.
//? returns -1 if no match is found.

let text = "I am Learning Js";
let position = text.search("Js");
console.log(position);