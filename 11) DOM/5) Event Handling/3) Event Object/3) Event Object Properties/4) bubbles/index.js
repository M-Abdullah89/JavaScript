//! A boolean indicating whether the event bubbles up through the DOM or not.
const btn = document.querySelector("button");
btn.addEventListener("click", function (event) {
  console.log(event.bubbles); // Output: true (for most events)
});
/* 
! bubbles are false for:

*Focus events: focus, blur
*Mouse events: mouseenter, mouseleave
*Form events: submit, reset
*Clipboard events: copy, cut, paste

*/
