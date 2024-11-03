let myWindow;

function openWin() {
  myWindow = window.open("", "myWindow", "width=400,height=200");
}

function closeWin() {
  if (myWindow) {
    myWindow.close();
  }
}

function checkWin() {
  if (!myWindow) {
    console.log("It has never been opened!");
  } else {
    if (myWindow.closed) {
      console.log("It is closed.");
    } else {
      console.log("It is open.");
    }
  }
}
