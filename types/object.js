/*=============================================
=            Object Types Handlers            =
=============================================*/

exports.isObject = (value) => {
  return value && typeof value === 'object' && value.constructor === Object;
}