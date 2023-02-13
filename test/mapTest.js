const assert = require('chai').assert;
const map = require('../map');

describe('# Map - Iterates through an array and executes a callback function on each element', () => {

  it(`returns [2,4,8] when passed [1,2,4] and array*2`, () => {
    assert.deepEqual(map([1,2,4], arg => arg*2),[2,4,8])
  });

  it(`returns ['UPPER', 'CASE', 'LETTERS'] when passed ['upper', 'case', 'letters'] and array.toUpperCase()`, () => {
    assert.deepEqual(map(['upper','case','letters'], arg => arg.toUpperCase()),['UPPER', 'CASE', 'LETTERS'])
  });

});