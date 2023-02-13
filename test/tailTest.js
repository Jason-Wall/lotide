const assert = require('chai').assert;
const tail = require('../tail');

// Test code
// const words = ['test', 'blah', 'foo'];
// assertArraysEqual(tail(words),['blah', 'foo']);

// const nestedNumbers = [1,5,6,[5,6,7],22];
// assertArraysEqual(tail(nestedNumbers),[5,6,[5,6,7],22]);

// const numbers = [1,5,6,22,100];
// assertArraysEqual(tail(numbers),[5,6,22,100]);

describe('# Tail - Return all bur the first segment of an array', () => {

  it(`returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it(`returns undefined for []`, () => {
    assert.deepEqual(tail([]), undefined);
  });
});

//const result = tail(["Hello", "Lighthouse", "Labs"]);
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!