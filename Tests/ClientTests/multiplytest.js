const functions = require('./sum');

test('adds 1 * 2 to equal 2', () => {
  expect(functions.multiply(1, 2)).toBe(2);
});
