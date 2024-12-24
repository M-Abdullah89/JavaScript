//! Async is a keyword used in async functions which always return a promise
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather Data");
            resolve(200);
        }, 2000);
    });
}

//! The await keyword can only be used inside an async function.
//? The await keyword makes the function pause the execution and wait for a resolved promise before it continues
// async function getWeatherData() {
//     await api();
// }

//! Now using the same example as used in previous topics

function getData(DataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", DataId);
            resolve("Succes");
        }, 3000);
    });
}

async function getAlldata() {
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
}
