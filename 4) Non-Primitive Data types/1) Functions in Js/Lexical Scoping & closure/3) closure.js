/* function outerFunction() {
    let outerVariable = 'I am outside!';

    function innerFunction() {
        console.log(outerVariable); // This will log 'I am outside!'
    }
   return innerFunction; //? returning function itself not the result that's why we are not using ()
}
 
const myClosure = outerFunction();
myClosure(); // Logs 'I am outside!'

 */

function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
    //! Yeh inner function count variable ko yaad rakhta hai, chahe createCounter function khatam ho chuka ho
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 2

//! Har dafa jab aap counter() ko call karte hain, yeh inner function wahi count variable use karta hai jo pehle se barh chuka hota hai.

/*

Initial: count = 0
First call: count = 1 (returns 1)
Second call: count = 2 (returns 2)
Third call: count = 3 (returns 3)

*/