const specialTriplet = require("./specialTriplet");
test("returns the product of a pythagorian triple which adds to 1000", () => {
    expect(specialTriplet()).toBe(31875000);
});