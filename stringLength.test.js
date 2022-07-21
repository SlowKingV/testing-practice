const stringLength = require('./stringLength');

test("Return a length of 6 for 'string'", () => {
  expect(stringLength('string')).toBe(6);
});

test('Throw error if string is empty', () => {
  expect(stringLength('')).toThrow(Error);
});

test('Throw error if string is longer than 10 characters', () => {
  expect(stringLength('longer than 10 characters')).toThrow(Error);
});
