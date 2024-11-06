class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    // Bug: Incorrect optimization attempt
    if (b === 0) return 0;
    if (b === 1) return a;
    return a + this.multiply(a, b - 1); // Bug: Recursive implementation with no base case(Maximum call stack size error)
  }

  divide(a, b) {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  }

  power(base, exponent) {
    return Math.pow(base, exponent);
  }

  sqrt(number) {
    if (number < 0)
      throw new Error("Cannot calculate square root of negative number");
    return Math.sqrt(number);
  }

  abs(number) {
    return Math.abs(number);
  }
}

module.exports = Calculator;
