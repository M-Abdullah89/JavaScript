//! same as defineProperty but it only adds one property
const obj = {
    Name : "Abdullah",
    language: "Ja"
  };
  
  Object.defineProperty(obj,"language",{value : "Js"})

  console.log(obj);   //* {Name: 'Abdullah', language: 'Js'}
  //? The value is overwritten