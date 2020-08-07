const { isString } = require('./../index');

test('Test string : string', () => {
  expect(isString("string")).toBe(true);
});
