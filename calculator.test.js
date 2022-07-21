const calculator = require('./calculator');

describe('Use calculator add() method to', () => {
  test('add two integers (3 + 4 = 7)', () => {
    expect(calculator.add(3, 4)).toBe(7);
  });
  test('add zeros (0 + 0 = 0)', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });
  test('add decimals (1.5 + 3.5 = 5)', () => {
    expect(calculator.add(1.5, 3.5)).toBe(5);
  });
});

describe('Use calculator subtract() method to', () => {
  test('subtract two integers (3 - 4 = -1)', () => {
    expect(calculator.subtract(3, 4)).toBe(-1);
  });
  test('subtract zeros (0 - 0 = 0)', () => {
    expect(calculator.subtract(0, 0)).toBe(0);
  });
  test('subtract decimals (3.5 - 1.5 = 2)', () => {
    expect(calculator.subtract(3.5, 1.5)).toBe(2);
  });
});

describe('Use calculator divide() method to', () => {
  test('divide an integer by another (15 / 5 = 3)', () => {
    expect(calculator.divide(15, 5)).toBe(3);
  });
  test('divide an integer by another with decimal result (2 / 8 = 0.25)', () => {
    expect(calculator.divide(2, 8)).toBe(0.25);
  });
  test('divide decimals (2.5 / 0.5 = 5)', () => {
    expect(calculator.divide(2.5, 0.5)).toBe(5);
  });
});

describe('Use calculator multiply() method to', () => {
  test('multiply an integer by another (4 * 6 = 24)', () => {
    expect(calculator.multiply(4, 6)).toBe(24);
  });
  test('multiply an integer by zero (15 * 0 = 0)', () => {
    expect(calculator.multiply(15, 0)).toBe(0);
  });
  test('multiply decimals (2.5 * 0.5 = 1.25)', () => {
    expect(calculator.multiply(2.5, 0.5)).toBe(1.25);
  });
});
