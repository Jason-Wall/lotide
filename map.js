// Returns a modified array based on the instructions of a user callback function
const map = (arr, func) => {
  const resultArr = [];
  for (let element of arr) {
    const output = (func(element));
    resultArr.push(output);
  }
  return resultArr;
};

module.exports = map;