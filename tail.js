const tail = function(arr) {
  return arr && arr.length >= 2 ? arr.slice(1) : undefined;
};

module.exports = tail;
