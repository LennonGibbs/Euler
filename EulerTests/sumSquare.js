function sumSquare(num) {
    let sum = 0;
    let squareSum = 0;
    for (let i = 0; i < num + 1; i++) {
        sum += i;
        squareSum += i * i;
    }
    sum *= sum;
    let difference = sum - squareSum;
    return difference;
}
module.exports = sumSquare;