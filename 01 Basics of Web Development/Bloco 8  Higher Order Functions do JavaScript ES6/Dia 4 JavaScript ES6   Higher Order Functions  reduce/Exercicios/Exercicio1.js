//Dada uma matriz, transforme em um array.

const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = arrays.reduce((result, current) => result.concat(current));

console.log(flatten)
assert.deepStrictEqual(flatten, ['1', '2', '3', true, 4, 5, 6]);