//Returns an object arrays with positions for of each letter in a string.
const letterPositions = function(str) {
  const results = {};
  for (let n = 0; n < str.length; n++) {
    if (str[n].match(/[a-z]/i)) {
      if (results[str[n]]) {
        results[str[n]].push(n);
      } else {
        results[str[n]] = [n];
      }
    }
  }
  return results;
};

module.exports = letterPositions;