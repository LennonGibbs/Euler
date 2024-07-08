const nthPrime = require("./nthPrime");
const isPrime = require("./isPrime");
test("returns the 10001st prime number", () => {
    expect(nthPrime(10001,isPrime)).toBe(104743);
});