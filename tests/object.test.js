const {isObject} = require('./../index');

test('Obejct testing : {}', () => {
  expect(isObject({})).toBe(true);
});