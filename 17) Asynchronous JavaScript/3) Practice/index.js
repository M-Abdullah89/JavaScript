const blast = document.querySelector(".blast");
const stopblast = document.querySelector(".stopblast");
const timer = document.querySelector(".timer");

blast.addEventListener("click", () => {
    let count = 10;
    let intervalId = setInterval(() => {
        count--;
        timer.textContent = count;
        if (count == 0) {
            clearInterval(intervalId);
            while (true) {
                console.log("Blast Off!")
            }
        }
    }, 1000);
    stopblast.addEventListener("click", () => {
        clearInterval(intervalId);
        setTimeout(() => {
            timer.textContent= "Blast has been stopped";
        }, 4000);
        timer.textContent= "";
    });
});