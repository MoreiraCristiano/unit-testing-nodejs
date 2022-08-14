const { sum } = require("../my-code");

describe("TC: 01: Math functions.", () => {
  beforeAll(() => {
    console.log("Something before all the test cases");
  });

  beforeEach(() => {
    "Something before each one of test cases";
  });

  it("Sums two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
