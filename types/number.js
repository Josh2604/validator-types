/*=============================================
=            Number Types Handlers            =
=============================================*/

exports.isNumber = (value) => {
  return typeof value === 'number' && isFinite(value);
}