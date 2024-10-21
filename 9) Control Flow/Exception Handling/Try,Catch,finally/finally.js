//! The finally statement defines a code block to run regardless of the result.
//? it is optional to use

/* try {
    console.log('This is something',a);
} catch (error) {
    console.error("Error Occured");
}
finally{
  console.log("End")
} */

//! finally always runs 
//? so why we use finally we can directly use the statement? 
//? the reason is that finally doesnot always run it can be stopped in a function if return is used

function func(){
    let a = "Amazing"
    try {
        console.log('This is something',a);// as this has no error 
        return true;
    } catch (error) { // this will not run
        console.error("Error cured");
        return false;
    }
    finally{
      console.log("End") //! this will run even after return statement
    }
}

console.log(func())