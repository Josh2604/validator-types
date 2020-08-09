const { isBoolean } = require('./../index');

test('Boolean testing : true', () => {
  expect(isBoolean(true)).toBe(true);
});