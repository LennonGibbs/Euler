const fibEven = require("./fibEven.js");
test("Returns the sum of all fibonacci values up to the entered number", () => {
    expect(fibEven(400)).toBe(798);
});
