const palindrome = require("./palindrome.js");
test("Returns the largest multiple of two 3 digit numbers which is a palindrome", () => {
    expect(palindrome(3)).toBe(906609);
});