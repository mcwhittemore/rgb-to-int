var errorMessage = 'Must be an rgb object';

var check = function(rgb, name) {
  if (typeof rgb[name] !== 'number') throw new Error(errorMessage);
  if (rgb[name] < 0 || rgb[name] > 255) throw new Error(errorMessage);
}

module.exports = function(rgb) {
  if (typeof rgb !== 'object') throw new Error(errorMessage);
  check(rgb, 'red');
  check(rgb, 'green');
  check(rgb, 'blue');

  return rgb.red << 16 | rgb.green << 8 | rgb.blue;
}
