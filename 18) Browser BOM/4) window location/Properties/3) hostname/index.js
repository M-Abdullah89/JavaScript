//! The location.hostname property returns the host (IP adress or domain) of a URL.
//? The location.hostname property can also be set, to navigate to the same URL with a new hostname.

const hostname = location.hostname;

// Display the hostname on the webpage
document.getElementById('hostnameInfo').innerText = `The hostname of this page is: ${hostname}`;

// Log the hostname to the console
console.log(`The hostname of this page is: ${hostname}`);