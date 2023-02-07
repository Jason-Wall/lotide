// const assertEqual = function (actual, expected) {
//   if (actual === expected) {
//     console.log(`✅: ${actual} === ${expected}`);
//   } else {
//     console.log(`🔴: ${actual} !== ${expected}`);
//   }
// };

const tail = function(arr) {
  return arr && arr.length >= 2 ? arr.slice(1) : undefined;
};

// Test code
let words = ['test', 'blah', 'foo'];
console.log(tail(words));