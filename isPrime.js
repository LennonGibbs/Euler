function isPrime(i) {
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            return false;
        }
    }
    return true;
}