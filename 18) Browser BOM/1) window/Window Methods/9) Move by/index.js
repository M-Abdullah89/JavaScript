let myWindow;

function openWin() {
  myWindow = window.open("", "", "width=400, height=400");
}

function moveWin() {
  myWindow.moveBy(250, 250);
}