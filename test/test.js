var rgbToInt = require('../');
var assert = require('assert');

it('works with an rgb object', function() {
  var int = rgbToInt({
    red: 42,
    green: 42,
    blue: 42
  });
  assert.deepEqual(int, 2763306)
});

it('all zeros are 0', function() {
  var int = rgbToInt({
    red: 0,
    green: 0,
    blue: 0
  });
  assert.deepEqual(int, 0)
});

it('all 255s are 16777215', function() {
  var int = rgbToInt({
    red: 255,
    green: 255,
    blue: 255
  });
  assert.deepEqual(int, 16777215)
});

it('doesn\'t fail on any number between 0 and 16777215', function() {
  for (var red = 0; red < 256; red++) {
    for (var green = 0; green < 256; green++) {
      for (var blue = 0; blue < 256; blue++) {
        var int = rgbToInt({
          red: red,
          green: green,
          blue: blue
        });
        if (int < 0 || int > 16777215) throw new Error('Invalid value');
      }
    }
  }
});

it('throws an error when red its provided', function() {
  assert.throws(function() {
    rgbToInt({green: 0, blue: 0});
  });
});

it('throws an error when green its provided', function() {
  assert.throws(function() {
    rgbToInt({red: 0, blue: 0});
  });
});

it('throws an error when blue its provided', function() {
  assert.throws(function() {
    rgbToInt({green: 0, red: 0});
  });
});

it('throws an error when its a number', function() {
  assert.throws(function() {
    rgbToInt(9.9);
  });
});

it('throws an error when a color is less than 0', function() {
  assert.throws(function() {
    rgbToInt({red: 0, green: -1, blue: 0});
  });
});

it('throws an error when a color is greater than 255', function() {
  assert.throws(function() {
    rgbToInt({red: 0, green: 256, blue: 0});
  });
});
