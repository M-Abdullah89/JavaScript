//! matchMedia() method returns a MediaQueryList with the results from the query.

let res;
if (window.matchMedia("(max-width: 700px)").matches) {
  res = "The screen is less or equal to, 700 pixels wide.";
} else {
  res = "The screen is at least 700 pixels wide.";
}
document.querySelector("p").innerHTML = res;