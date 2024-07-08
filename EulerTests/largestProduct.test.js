const largestProduct = require("./largestProduct");
test("Finds the largest product of any 13 number series of digits within a 1000 digit number", () => {
    expect(largestProduct(13)).toBe(23514624000);
});