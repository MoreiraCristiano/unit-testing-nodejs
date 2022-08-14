# Unit Testing

Tests a unit of a code

## Library

Jest

## Examples

```javascript
describe("Suit description", () => {
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
```
