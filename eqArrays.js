const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`🔴: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arrA, arrB) {
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);




