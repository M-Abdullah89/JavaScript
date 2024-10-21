//! The try statement defines the code block to run (to try).
//! The catch statement defines a code block to handle any error.


try {
    console.log('This is something',a); //! it will show an error bcz a is not defined 
} catch (error) {//! on error
    console.error("Error occured"); 
}
    // console.log('This is something',a);  //? a is not defined error


/* 
    
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}

    */