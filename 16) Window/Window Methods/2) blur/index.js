//! The blur() method removes focus from a window.

//? The blur() method removes focus from a window.
const openWin = () => {
  const windowName = window.open(
    "https://www.example.com",
    "",
    "width=500,height=500"
  ); //?URL is loaded into the parent frame

  windowName.blur();
};
