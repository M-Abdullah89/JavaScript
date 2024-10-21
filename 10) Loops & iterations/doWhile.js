//! The do while loop is a similar to while loop. This loop will execute the code block atleast once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.


/* do {
   code block to be executed
}
while (condition); */
let text = "";
let i = 0;
do {
    text = "The number is " + i;
    i++;
    console.log(text)
  }
  while (i <= 10);