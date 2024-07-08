const largePrime = require("./largePrime.js");
const isPrime = require("./isPrime.js");
test("Return the largest prime factor of the input", () => {
    expect(largePrime(99,isPrime)).toBe(11);
});