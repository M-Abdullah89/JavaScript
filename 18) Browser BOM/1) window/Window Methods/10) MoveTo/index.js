//! moveTo method moves a window to the specified coordinates.

let myWindow;

function openWin() {
  myWindow = window.open("", "", "width=400, height=200");
}

function moveWin() {
  myWindow.moveTo(500, 100);
}