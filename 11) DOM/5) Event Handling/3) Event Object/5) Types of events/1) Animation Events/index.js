const div1 = document.getElementById("myDIV");

function myFunction() {
  div1.style.animation = "mymove 4s 2 ";
}

div1.addEventListener("animationstart", myStartFunction);
div1.addEventListener("animationiteration", myRepeatFunction);
div1.addEventListener("animationend", myEndFunction);

function myEndFunction() {
  this.innerHTML = "The animation has completed";
  this.style.backgroundColor = "lightgray";
}

function myStartFunction() {
  this.innerHTML = "The animation has started";
  this.style.backgroundColor = "pink";
}
function myRepeatFunction() {
  this.innerHTML = "The animation was played again";
  this.style.backgroundColor = "lightblue";
}