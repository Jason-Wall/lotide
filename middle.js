//TEST - ASSERTION FUNCTIONS
const eqArrays = function (arrA, arrB) {
  if (arrA.length !== arrB.length) { return false }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function (arrA, arrB) {
  const arrEq = eqArrays(arrA, arrB);
  if (arrEq) {
    console.log(`✅: [${arrA}] === [${arrB}]`);
  } else {
    console.log(`🔴: [${arrA}] !== [${arrB}]`);
  }
};


//MAIN FUNCTION
const middle = function (arr) {
  const arrLen = arr.length;
  const arrSliceIndex = Math.floor(arrLen / 2);
  let midArr = []
  if (arrLen < 2) { return midArr }
  if (arrLen % 2 === 0) {
    midArr = midArr.concat(arr.slice(arrSliceIndex - 1, arrSliceIndex + 1));
  } else {
    midArr = midArr.concat(arr.slice(arrSliceIndex, arrSliceIndex + 1));
  }
  return midArr;
}


//TEST CASES
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);