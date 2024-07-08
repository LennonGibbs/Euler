function nthPrime(n,isPrime) {
    let count = 0;
    let i = 2;
    while (true) {
        if (isPrime(i)) {
            count++;
        }
        if (count == n) {
            return i;
            break;
        }
        i++;
    }
}
module.exports = nthPrime;