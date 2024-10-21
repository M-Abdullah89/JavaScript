//! pads a string at the end.

//? string.padEnd(length, string)


let text = "5";
let padded = text.padEnd(4,"s");
console.log(padded)//* 5sss

let lname = "Abdullah";
let modified = lname.padEnd(11,".");
//? 8 is length of string and 3 are for ...
console.log(modified);