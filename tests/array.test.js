const { isArray } = require('./../index');

test('Array testing : []', () => {
  expect(isArray([])).toBe(true);
});
