const {isNumber} = require('./../index');

test('Test number : 20', () => {
  expect(isNumber(20)).toBe(true);
});