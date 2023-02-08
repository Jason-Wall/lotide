//TEST FUNCTIONS
const assertArraysEqual = function (arrA, arrB) {
  const arrEq = eqArrays(arrA, arrB);
  if (arrEq) {
    console.log(`✅: [${arrA}] === [${arrB}]`);
  } else {
    console.log(`🔴: [${arrA}] !== [${arrB}]`);
  }
};

const eqArrays = function (arrA, arrB) {
  if (arrA.length !== arrB.length) { return false };
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) { return false };
  }
  return true;
}


//MAIN FUNCTION
const letterPositions = function (str) {
  const results = {};
  for (let n = 0; n < str.length; n++) {
    if (str[n].match(/[a-z]/i)) {
      if (results[str[n]]) {
        results[str[n]].push(n);
      } else {
        results[str[n]] = [n];
      }
    }
  }
  console.log(results)
  return results;
};


//TESTING
const test = letterPositions("lighthouse in the house");

assertArraysEqual(test['l'], [0]);
assertArraysEqual(test['i'], [1,11]);
