const reverseString = require('./reverseString');

test("Reverse string 'test string' (tset)", () => {
  expect(reverseString('test string')).toBe('gnirts tset');
});
