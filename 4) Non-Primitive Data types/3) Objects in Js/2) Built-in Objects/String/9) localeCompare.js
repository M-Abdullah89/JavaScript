//! compares two strings in the current locale.
//? returns sort order -1, 1, or 0 (for before, after, or equal).

let text1 = "ab";
let text2 = "ba";
let result = text1.localeCompare(text2);
console.log(result);

/* 
-1 if the string is sorted before the compareString
 0 if the two strings are equal
 1 if the string is sorted after the compareString
  */