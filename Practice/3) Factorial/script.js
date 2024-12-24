function factorial(n) {
        let fact = 1;
        for (let j = 1; j <= n; j++) {
            fact *= j;
        }
        console.log(fact);
}

factorial(5)