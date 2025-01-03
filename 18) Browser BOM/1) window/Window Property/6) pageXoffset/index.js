setTimeout(() => {
    window.scrollBy(100,0);
    console.log(window.pageXOffset);
},2000);

//! The pageXOffset property returns the pixels a document has scrolled from the upper left corner of the window.
//? The pageXOffset property is equal to the scrollX property.
//* The pageXOffset property is read-only.