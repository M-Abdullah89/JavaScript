//! The origin property returns the protocol, hostname and port number of a URL.
console.log(window.location.origin);
//! If the port number is not in the URL, or if it is a default port like 80 (Http), or 443 (https), some browsers will not display the port number.