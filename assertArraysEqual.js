const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrA, arrB) {
  const arrEq = eqArrays(arrA, arrB);
  if (arrEq) {
    console.log(`✅: [${arrA}] === [${arrB}]`);
  } else {
    console.log(`🔴: [${arrA}] !== [${arrB}]`);
  }
};

module.exports = assertArraysEqual;



