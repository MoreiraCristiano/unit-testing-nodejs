# Unit Testing

- Tests a unit of a code;
- Each function tested must be pure;
- ES Modules and how to run: https://jestjs.io/docs/ecmascript-modules;

How to run Jest with ES modules

```javascript
NODE_OPTIONS=--experimental-vm-modules npx jest
```

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
