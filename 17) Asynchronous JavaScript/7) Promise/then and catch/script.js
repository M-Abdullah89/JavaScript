//! .then method applies only if the promise is fulfilled
const getPromise = () => {
return new Promise((resolve, reject) => {
    console.log("I am a Promise");
    resolve("resolved");
});
};

let promise = getPromise();
promise.then((res)=>{
    console.log("promise fulfilled \"",res,"\"");
})
