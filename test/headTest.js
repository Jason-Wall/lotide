const assert = require('chai').assert;
const head   = require('../head');

// const assertEqual = require('../assertEqual');
// const head = require('../head');

// assertEqual(head([]), undefined);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

describe('# Head -  first instance from an array', () => {

  it('returns undefined when passed an empty array', () => {
    assert.strictEqual(head([]),undefined);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  
  it(`returns 'Hello' for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), 'Hello');
  });
  
});