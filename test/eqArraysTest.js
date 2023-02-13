const eqArrays = require('../eqArrays');

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 4], [1, 2, 3]));
console.log(eqArrays([1, [2, 3]], [1, 2, 3])); // eqArrays needs refactor to account for nested arrays.
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4]));




