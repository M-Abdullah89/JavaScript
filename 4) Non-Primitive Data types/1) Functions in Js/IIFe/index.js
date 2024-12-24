//! IIFE (Immediately Invoked Function Expressions)
//? It is a function that executes immediately as soon as they are defined


function getData(DataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", DataId);
            resolve("Succes");
        }, 3000);
    });
}

// async function getAlldata() {
//     console.log("fetching.........");
//     await getData(1);
//     console.log("fetching.........");
//     await getData(2);
//     console.log("fetching.........");
//     await getData(3);
//     console.log("fetching.........");
//     await getData(4);
//     console.log("fetching.........");
//     await getData(5);
//     console.log("fetching.........");
//     await getData(6);
//     console.log("fetching.........");
//     await getData(7);
// }

//! we have to call the function to execute the function but instead we can use IIFE

(async function getAlldata() {
    console.log("fetching.........");
    await getData(1);
    console.log("fetching.........");
    await getData(2);
    console.log("fetching.........");
    await getData(3);
    console.log("fetching.........");
    await getData(4);
    console.log("fetching.........");
    await getData(5);
    console.log("fetching.........");
    await getData(6);
    console.log("fetching.........");
    await getData(7);
})();