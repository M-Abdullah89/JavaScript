const container = document.querySelector('.container'),
    input = document.querySelector('input'),
    res = document.querySelector('.res'),
    box = document.querySelector('.box'),
    num = document.querySelector('.num'),
    Score = document.querySelector('.Score'),
    form = document.querySelector('form'),
    X = document.querySelector('.X');;

let random_number = Math.floor(Math.random() * 101);
console.log(random_number);
let guess = 0;
let score;
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = input.value.trim();
    const number = Number.parseFloat(value);

    if (!value || isNaN(number)) { // Check if input is empty or not a valid number
        res.innerText = "Enter a valid number";
        res.style.color = "red";
        guess++;
    }
    else if (value < random_number) {
        res.innerText = `The number is too low. Try a higher number.`;
        res.style.color = "blue";
        guess++;
    }
    else if (value > random_number) {
        res.innerText = `The number is too high. Try a lower number.`;
        res.style.color = "red";
        guess++;
    }
    else if (value == random_number) {
        box.classList.toggle("box");
        box.classList.toggle("onwin");
        num.innerText = `The number is ${random_number}`;
        score = 100 - guess;
        Score.innerText = `Score: ${score}`;
        setTimeout(() => {
              input.value = '';
              location.reload();
    }, 3000);
    X.addEventListener("click", () => {
        box.classList.toggle("onwin")
        box.classList.toggle("box")
    })

    }

    setTimeout(() => {
        input.value = '';
    }, 100);
});