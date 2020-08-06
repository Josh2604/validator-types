/*=============================================
=            Number Types Handlers            =
=============================================*/

exports.isArray = (value) => {
  return value && typeof value === 'object' && value.constructor === Array;
}