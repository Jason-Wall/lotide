// Returns a new array containing all but the first element of the provided array.
const tail = function(arr) {
  return arr && arr.length >= 2 ? arr.slice(1) : undefined;
};

module.exports = tail;
