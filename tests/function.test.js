const { isFunction } = require('./../index');

test('Function testing : function test(){}', () => {
  expect(isFunction(function test(){})).toBe(true);
});