import { sum, inOneHour } from "../my-code";

describe("TC: 01: Math functions.", () => {
  /**
   * Here we can define some function like:
   * before all, before each, after all, after each
   */
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

describe("TC 02: Time functions", () => {
  it("Returns timestamp for one hour ahead", () => {
    expect(inOneHour()).toBe(3);
  });
});
