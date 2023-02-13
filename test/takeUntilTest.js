const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe(`# takeUntil - Push elements to a new array until a callback function is satisfied.`, (() => {

  it(`returns [1,2,5] when given [1,2,5,-1,12] and x < 0`, () => {
    let test = [1, 2, 5, -1, 12];
    let func = x => x < 0;
    let expect = [1, 2, 5];

    assert.deepEqual(takeUntil(test, func), expect);
  })

  it(`returns ["I've", "been", "to", "Hollywood"] when given ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"] and x === ','`, () => {
    let test = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    let func = x => x === ',';
    let expect = ["I've", "been", "to", "Hollywood"];

    assert.deepEqual(takeUntil(test, func), expect);
  })
}));