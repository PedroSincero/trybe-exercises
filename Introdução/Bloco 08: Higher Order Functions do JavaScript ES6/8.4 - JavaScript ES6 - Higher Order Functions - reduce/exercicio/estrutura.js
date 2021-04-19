const assert = require('assert');

function foo() {
  return 'bar';
}

assert.strictEqual(foo(), 'bar');