// Get the host (hostname and port) of the current page
const host = location.host;

// Display the host on the webpage
document.getElementById('hostInfo').innerText = `The host of this page is: ${host}`;

// Log the host to the console
console.log(`The host of this page is: ${host}`);