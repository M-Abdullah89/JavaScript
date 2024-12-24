//! we can open a custom window
//* syntax: window.open(URL, name, specs, replace)

//! URL: The URL of the page to open.
//? If no URL is specified, a new blank window/tab is opened

//! name:  The target attribute or the name of the window.
const openWin = () => {
  // window.open("","_blank") //?  URL is loaded into a new window, or tab
  //   window.open("https://www.example.com", "_parent"); //?URL is loaded into the parent frame
  // Opens a new window with the specified URL and targets the topmost window
//   window.open("https://www.example.com", "_top");
};

//! specs : contains boolean values such as , resizeable,fullscreen and other properties like height width, top left bottom location e.t.c