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

function isPrime(i) {
    for (let j = 2; j < Math.sqrt(i); j++) {
        if (i % j == 0) {
            return false;
        }
    }
    return true;
}