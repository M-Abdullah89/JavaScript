//! The while loop loops through a block of code as long as a specified condition is true.

/* while (condition) {
 code block to be executed
} */
let a  = 0;
while(a<=10){
    console.log(a)
    a++;
}





 const person = ["Abdullah", 15, 10, "ok"];
let i = 0;//iterator
let res = ""; //result

while (person[i]) {
  res = person[i];
  i++;
  console.log(res)
}
