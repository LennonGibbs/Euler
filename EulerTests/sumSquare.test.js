const sumSquare = require("./sumSquare.js");
test("return the difference between the sum of squares and square of sum for the first hundered natural numbers", () => {
    expect(sumSquare(100)).toBe(25164150);
});