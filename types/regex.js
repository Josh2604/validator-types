/*=============================================
=            Regex Types Handlers             =
=============================================*/

exports.isRegex = (value) => {
  return value && typeof value === 'object' && value.constructor === RegExp;
}