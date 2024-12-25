window.addEventListener('beforeunload', function (event) {
    const currentTime = new Date('2024-12-14T11:54:05+05:00');
    const message = 'Are you sure you want to leave? Your current time is: ' + currentTime.toLocaleString();
    
    event.preventDefault(); // Standard for most browsers
    event.returnValue = message; // For older browsers
    return message; // For older browsers
});