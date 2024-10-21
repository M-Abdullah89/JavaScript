//! matches a string against a regular expression

let text = "The rain in SPAIN stays mainly in the plain";
let text2 = "The rain in SPAIN stays mainly in the plai";
let txt = text.match(text2);
let txt2 = text.match('text2');
console.log(txt)
console.log(txt2)