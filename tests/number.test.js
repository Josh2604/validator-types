const {isNumber} = require('./../index');

test('Numbre testing : 20', () => {
  expect(isNumber(20)).toBe(true);
});