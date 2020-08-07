const { isArray } = require('./types/array');
const { isBoolean } = require('./types/boolean');
const { isDate } = require('./types/date');
const { isFunction } = require('./types/function');
const { isObject } = require('./types/object');
const { isNumber } = require('./types/number');
const { isRegex } = require('./types/regex');
const { isString } = require('./types/string');

module.exports = {
  isArray: isArray,
  isBoolean: isBoolean,
  isDate: isDate,
  isFunction: isFunction,
  isNumber: isNumber,
  isObject: isObject,
  isRegex: isRegex,
  isString: isString
}