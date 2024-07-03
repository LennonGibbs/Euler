function largePrime(number) {
    let answer = 0;
    for (let i = 0; i < number; i++) {
        if (isPrime(i)) {
            if (number % i == 0) {
                number = number / i;
                answer = i;
            }
        }
    }
    document.getElementById("solution").textContent = answer;
}

