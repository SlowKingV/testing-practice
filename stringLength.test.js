const stringLength = require('./stringLength');

test("Return a length of 11 for 'test string'", () => {
  expect(stringLength('test string')).toBe(11);
});
