const {isNumber} = require('./../index');

test('Testeo de number', () => {
  expect(isNumber(20)).toBe(true);
});