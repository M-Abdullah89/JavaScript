//! Generator functions in JavaScript are a special type of function 
//? they allow you to control the execution flow, pause and resume the function, and produce multiple values over time, rather than returning a single value. 
//* They are particularly useful for managing asynchronous tasks or working with sequences of data.

//! generator functions use the yield keyword to pause execution and return a value.
//? Each yield pauses execution until next() is called again.

function* generatorFunction() {
    yield "Hello";
    yield "World";
    return "Done";
}

// const gen = generatorFunction();
// console.log(gen);
// console.log(gen.next()); // { value: "Hello", done: false }
// console.log(gen.next()); // { value: "World", done: false }
// console.log(gen.next()); // { value: "Done", done: true }


//! The return() method is used to stop the generator's execution early, regardless of its current state.


function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen2 = myGenerator();

// console.log(gen2.next()); // { value: 1, done: false }
// console.log(gen2.return("Finished")); // { value: "Finished", done: true }
// console.log(gen2.next()); // { value: undefined, done: true }



//! The throw() method is used to inject an error into the generator, simulating an exception
function* myGenerator() {
    try {
        yield 1;
        yield 2;
    } catch (err) {
        console.log("Caught error:", err);
    }
    yield 3;
}

const gen3 = myGenerator();

// console.log(gen3.next()); // { value: 1, done: false }
// console.log(gen3.throw(new Error("Something went wrong"))); // Caught error: Error: Something went wrong
// // { value: 3, done: false }
// console.log(gen3.next()); // { value: undefined, done: true }














//! Use case
//? you can create an infinite loop without freezing your pc

function* generateID() {
    let id = 1;
    while (true) {
        yield id
        id++
    }
}
// const obj = generateID();
// console.log(obj.next());
// console.log(obj.next());

function* generateIDwithincrement() {
    let id = 1;
    while (true) {
        const increment = yield id
        if (increment != null) {
            id += increment
        } else {
            id++
        }
    }
}
 const obj = generateIDwithincrement();
console.log(obj.next());
console.log(obj.next());
console.log(obj.next(2));
console.log(obj.next());
