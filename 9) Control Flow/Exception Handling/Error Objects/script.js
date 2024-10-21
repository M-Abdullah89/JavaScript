//! Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions
try {
    console.log(hello)
    console.log(hello)
    
} catch (error) {
    console.log("The type of error is ",error.name);
    console.log("The reason is because",error.message);
    console.log("Full error is ",error.stack);
}
  