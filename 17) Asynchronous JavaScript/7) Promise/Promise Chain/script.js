const func1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 1");
            resolve("Succes")
        }, 4000);
    });
}
const func2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data 2");
            resolve("Succes")
        }, 4000);
    });
}


// const p1 = func1();
// p1.then((res)=>{
//     console.log(res);
//     const p2 = func2();
//     console.log("fetching data2......");
//     p2.then((res)=>{
//         console.log(res);
//     })
// })

// console.log("fetching data1......");
// func1().then((res) => {
//     console.log("fetching data2......");
//     func2().then((res) => {
//     })
// })
//! The above code is an example of promise chain


function getData(DataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", DataId);
            resolve("Succes");
        }, 3000);
    })
}
console.log("getting data 1");
getData(1).then((res) => {
    console.log("getting data 2");
    return getData(2);
}).then((res) => {
    console.log(res);
})
// This is a promise chain