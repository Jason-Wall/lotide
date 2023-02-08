const flatten = function(arr){
let returnArr = [];
for (let step of arr){
  typeof Array.isArray(step) ? returnArr.push(...step): returnArr.push(step);
  }
  console.log('returnArr', returnArr);
};

flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]