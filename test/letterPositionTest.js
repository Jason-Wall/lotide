const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

let test = "lighthouse in the house";
const expect = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

describe('# letterPositions -  returns an object with arrays of positions for a each letter.', () => {

  it('returns array when passed test string - "lighthouse in the house"', () => {
    assert.deepEqual(letterPositions(test), expect);
  });

});