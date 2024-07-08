const smallMult = require("./smallMult.js");
test("Return the smallest number divisible by every number up to 20", () => {
    expect(smallMult(20)).toBe(232792560);
});