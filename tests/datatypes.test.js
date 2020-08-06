const {isNumber, isString, isArray} = require('./../index');

test('Testeo de string', () => {
  expect(isString("cadena")).toBe(true);
});



test('Testeo de arrays', () => {
  expect(isArray([])).toBe(true);
});