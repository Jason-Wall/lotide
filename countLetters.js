// Returns an object containing a sum of each letter in a string.
const countLetters = function(str) {
  const results = {};
  for (const letter of str) {
    if (letter.match(/[a-z]/i)) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;