const {isNumber} = require('./types/number');
const {isString} = require('./types/string');
const {isArray} = require('./types/array');

module.exports = {
  isArray: isArray,
  isNumber: isNumber,
  isString: isString
}