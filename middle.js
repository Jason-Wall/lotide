// Returns a new array containing the middle element(s) of the provided array.

const middle = function(arr) {
  const arrLen = arr.length;
  const arrSliceIndex = Math.floor(arrLen / 2);
  let midArr = [];
  if (arrLen <= 2) {
    return midArr;
  }
  if (arrLen % 2 === 0) {
    midArr = midArr.concat(arr.slice(arrSliceIndex - 1, arrSliceIndex + 1));
  } else {
    midArr = midArr.concat(arr.slice(arrSliceIndex, arrSliceIndex + 1));
  }
  return midArr;
};

module.exports = middle;