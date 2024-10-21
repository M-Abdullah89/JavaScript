//! function scope 
//? accessibility of variables within a function
//? Variables declared inside a function are only accessible within that function. This means you can’t use those variables outside the function.

/* function exampleFunction() {
    let x = 10; // x is only accessible within exampleFunction
    console.log(x); // This will print 10
}

exampleFunction(); */
//* console.log(x); // This will cause an error because x is not defined outside the function


//! But lexical scoping says that a variable declared in a function can be also be accesed in a nested function










function init() {
    let name = "Abdullah";
    // console.log(abc)//* abc is not defined and cannot be accessed
    function child1() {
      //? this inner function has access to all local variables declared in outer function
      console.log("child1",name); 
      //? creating a variable in child function
      let abc = "abc";
    }
    function child2() {
        console.log("child2",name);
     //   console.log(abc);//* abc cannot be accesed . sibling function & parent function cannot access variables declared in child functions 
    }
    child1();
    child2();
  }
  init();
  
