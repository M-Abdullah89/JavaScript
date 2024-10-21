//! JSON (|J|ava|S|cript |O|bject |N|otation)
//? JSON is a format for storing and transporting data.

//? JavaScript Objects can be converted into JSON, and JSON can be converted back into JavaScript Objects.

let My_JSON =  `{
    "name" : "Abdullah",
    "age"  : 15,
    "class":10,
    "arr" : [1,2,3,4],
    "Obj" : {
    "name" : "Abdullah",
    "arr"  : [5,4,3,2,1]
     }
}`;



let Obj = JSON.parse(My_JSON);
console.log(Obj);
console.log(typeof Obj);
console.log(Obj["arr"]);
console.log(Obj["arr"][3]);//4
console.log(Obj["Obj"]["arr"][0]);//5

//! The JSON.parse() method parses a string and returns a JavaScript object.
//?The string has to be written in JSON format.

//* The JSON.parse() method can optionally transform the result with a function.


let Obj_str = JSON.stringify(Obj);
console.log(Obj_str)
console.log(typeof Obj_str)



//! The JSON.stringify() method converts JavaScript objects into strings
























/* 
JSON values cannot be one of the following data types:

a function
a date
undefined


*/