const assert = require('chai').assert;
const countLetters = require('../countLetters');
const test = "OMG LHL";

describe('# Count Letters - Return an object with all instances of a letters in a string', () => {

  it(`returns object with letters broken out given a string: "OMG LHL!"`, () => {
    assert.deepEqual(countLetters(test), { O: 1, M: 1, G: 1, L: 2, H: 1 });
  });

});
