# rgb-to-int

This module takes an rgb object and converts it to a number between `0` and `16777215` inclusive

rgb values must be between 0 and 255 inclusive

## Install

`npm install rgb-to-int`

## Usage

```js
var rgbToInt = require('int-to-rgb');
var int = rgbToInt({
  red: 42,
  green: 42,
  blue: 42
});
console.log(int)
// => 2763306
```
