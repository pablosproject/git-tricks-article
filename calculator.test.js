const Calculator = require("./calculator");

describe("Calculator", () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test("adds two numbers correctly", () => {
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(-1, 1)).toBe(0);
  });

  test("subtracts two numbers correctly", () => {
    expect(calc.subtract(5, 3)).toBe(2);
    expect(calc.subtract(1, 1)).toBe(0);
  });

  test("multiplies two numbers correctly", () => {
    expect(calc.multiply(2, 3)).toBe(6);
    expect(calc.multiply(-2, 3)).toBe(-6);
    expect(calc.multiply(5, 5)).toBe(25);
    expect(calc.multiply(10, 10)).toBe(100);
    expect(calc.multiply(0, 5)).toBe(0);
    expect(calc.multiply(5, 1)).toBe(5);
    expect(calc.multiply(5, 3)).toBe(15);
    expect(calc.multiply(5, -3)).toBe(-15);
  });

  test("divides two numbers correctly", () => {
    expect(calc.divide(6, 2)).toBe(3);
    expect(calc.divide(5, 2)).toBe(2.5);
  });

  test("raises to power correctly", () => {
    expect(calc.power(2, 3)).toBe(8);
    expect(calc.power(3, 2)).toBe(9);
    expect(calc.power(5, 0)).toBe(1);
  });

  test("calculates square root correctly", () => {
    expect(calc.sqrt(9)).toBe(3);
    expect(calc.sqrt(2)).toBeCloseTo(1.4142, 4);
    expect(() => calc.sqrt(-1)).toThrow(
      "Cannot calculate square root of negative number",
    );
  });

  test("calculates absolute value correctly", () => {
    expect(calc.abs(-5)).toBe(5);
    expect(calc.abs(5)).toBe(5);
    expect(calc.abs(0)).toBe(0);
  });

  test("throws error when dividing by zero", () => {
    expect(() => calc.divide(5, 0)).toThrow("Division by zero");
  });
});
