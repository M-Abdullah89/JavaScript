// Detect when the hash changes
window.addEventListener('hashchange', () => {
    const currentHash = location.hash;
    console.log(`The current hash is: ${currentHash}`);
    alert(`Navigated to: ${currentHash}`);
});

// Trigger an alert when the page is loaded with a hash
window.addEventListener('DOMContentLoaded', () => {
    if (location.hash) {
        console.log(`Page loaded with hash: ${location.hash}`);
        alert(`Page loaded with hash: ${location.hash}`);
    }
});

//! The location.hash property sets or returns the anchor part of a URL, including the hash sign (#).