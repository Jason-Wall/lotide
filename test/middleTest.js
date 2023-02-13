const assert = require('chai').assert;
const middle = require('../middle');

describe('# Middle - Return middle segments of an array', () => {

  it('returns [2] when passed [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });
  
  it('returns [] when passed [1, 2] (2 or less elements)', () => {
    assert.deepEqual(middle([1, 2]),[]);
  });

  it('returns [] when passed []', () => {
    assert.deepEqual(middle([]),[]);
  });
  
  it('returns [2] when passed [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  });
  
  it(`returns 'Hello' for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ['Lighthouse']);
  });
  
});