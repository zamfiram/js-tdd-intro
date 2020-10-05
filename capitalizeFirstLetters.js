const assert = require('assert');

function capitalizeFirstLetters(input) {
  return input.lenght > 0
  ? input[0].toUpperCase() + input.slice(1)
  : '';
}


assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters.length, 1);
assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript');
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
assert.strictEqual(capitalizeFirstLetters(''), '');
