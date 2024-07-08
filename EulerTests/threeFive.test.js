const threeFive = require('./threeFive');
test("returns the sum of all multiples of 3 and 5 up to 400", () => {
    expect(threeFive(3, 5, 400)).toBe(37268);
});
