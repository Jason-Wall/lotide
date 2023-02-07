const without = function(arr, excludeArr) {
  let returnArr = [];
  for (let elem of arr) {
    if (!excludeArr.includes(elem)) {
      returnArr.push(elem);
    }
  }
  console.log(returnArr);
};



//TESTING

// const assertArraysEqual = function (arrA, arrB) {
//   const arrEq = eqArrays(arrA,arrB);
//   assertEqual(arrEq, arrA, arrB);
// }


// const assertEqual = function (arrEq, arrA, arrB) {
//   if (arrEq) {
//     console.log(`✅: ${arrA} === ${arrB}`);
//   } else {
//     console.log(`🔴: ${arrA} !== ${arrB}`);
//   }
// };

// const eqArrays = function (arrA, arrB) {
//   if (arrA.length!=arrB.length){return false}
//   for (let i = 0; i < arrA.length; i++) {
//     if (arrA[i] !== arrB[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);