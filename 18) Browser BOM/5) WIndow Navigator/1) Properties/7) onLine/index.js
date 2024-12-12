let res = document.querySelector('div')
if (navigator.onLine) {
    res.innerHTML = 'You are connected to the internet'
    
} else {
     res.innerHTML = 'You are not connected to the internet'
}