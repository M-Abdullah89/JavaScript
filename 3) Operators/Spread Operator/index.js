let arr1 = [3,5,8]
let obj1 = {...arr1}
console.log(obj1);

function sum(num1,num2,num3) {
    return num1+num2+num3;
}
console.log(sum(...arr1));

let obj2 = {
    name:"Abdullah",
    class:10,
    age:15,
}
console.log({...obj2,name:"Ab"});
//! only name will change 

// console.log({name:"Ab",...obj2});
//! nothung will change