function threeFive(x, y, z) {
    let total = 0;
    for (let i = 0; i < z; i++) {
        if (i % x == 0 || i % y == 0) {
            total += i;
        }
    }
    return total;
}
module.exports = threeFive;