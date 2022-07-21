const capitalize = require('./capitalize');

test("Capitalize first character of 'capitalize'", () => {
  expect(capitalize('capitalize')).toBe('Capitalize');
});
