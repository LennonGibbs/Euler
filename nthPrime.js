function nthPrime(n) {
    let count = 0;
    let i = 2;
    while (true) {
        if (isPrime(i)) {
            count++;
        }
        if (count == n) {
            document.getElementById("solution").textContent = i;
            break;
        }
        i++;
    }
}