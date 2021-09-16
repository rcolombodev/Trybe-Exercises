const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = names.reduce((result, current) => result + current.split('')
  .reduce((total, currentLetter) => (currentLetter.toLowerCase() === 'a') ? total + 1 : total, 0), 0)

console.log(containsA)
assert.deepStrictEqual(containsA, 20);