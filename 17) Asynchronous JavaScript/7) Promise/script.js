//? "Producing code" is code that can take some time

//? "Consuming code" is code that must wait for the result

//! A Promise is an 'Object' that links Producing code and Consuming code

//? A Promise is in one of three states:
//* Pending: initial state, neither fulfilled nor rejected (undefined)
//* Fulfilled: meaning that the operation was completed successfully
//* Rejected: meaning that the operation failed

let promise = new Promise((resolve, reject) => {
    console.log("Hello ");
});

//? Now write promise in browser console , PromiseState will be "pending" & promise Result will be undefined


//! To fulfill a promise state, we can use resolve function

let promise2 = new Promise((resolve, reject) => {
    resolve("resolved")
});

//? Now write promise2 in browser console , PromiseState will be "fulfilled" & promise Result will be the argument in the resolve function

//! To Reject a promise state, we can use reject function

let promise3 = new Promise((resolve, reject) => {
    // reject("this is due to reject")
    reject("This is not an error")
});

//? Now write promise3 in browser console , PromiseState will be "rejected" & promise Result will be the argument in the resolve function

//! They are generally used in API handling 

function getData(DataId,nextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",DataId);
            resolve("Fetched Data Successfully!");
            if (nextData) {
                nextData();
            }
        }, 5000);
    })
    
}

 