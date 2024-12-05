const a = document.querySelector('.first');
a.insertAdjacentHTML("beforebegin","<p> I am before first </p>")
a.insertAdjacentHTML("afterbegin","<p> I am at first inside first </p>")
a.insertAdjacentHTML("beforeend","<p> I at end of first </p>")
a.insertAdjacentHTML("afterend","<p> I am after first </p>")