const eqArrays = function (arrA, arrB) {
  if (arrA.length !== arrB.length) { return false };
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) { return false };
  }
  return true;
}



console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 4], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4]));



