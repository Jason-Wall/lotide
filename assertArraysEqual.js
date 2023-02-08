
const assertArraysEqual = function(arrA, arrB) {
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



assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 4]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
