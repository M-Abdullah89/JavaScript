//!  returns the property descriptors of an object.(only one)
const obj = {
    name : "Abdullah",
    class : 10,
    age : 15,
}
const descriptor = Object.getOwnPropertyDescriptor(obj,"name",)
console.log(descriptor);