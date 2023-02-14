const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe(`# countOnly - Count only elements in an array that are part of the approval list. Return counts in new array.`, (() => {

  it(`Returns object of names: count given a names array and approval object`, () => {
    let test = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    let approval = {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    };
    let expect = {
      Fang: 2,
      Jason: 1
    };

    assert.deepEqual(countOnly(test, approval), expect);
  });
}));