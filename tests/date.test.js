const { isDate } = require('./../index');

test('Date testing : 2020-08-08', () => {
  expect(isDate(new Date('2020-08-08'))).toBe(true);
});