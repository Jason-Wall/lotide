const assert = require('chai').assert;
const tail = require('../tail');

describe('# Tail - Return all bur the first segment of an array', () => {

  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it(`returns undefined for []`, () => {
    assert.deepEqual(tail([]), undefined);
  });
});
