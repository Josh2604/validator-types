const { isRegex } = require('./../index');

test('Regex testing : /[a-z]/', () => {
  expect(isRegex(/[a-z]/)).toBe(true);
});