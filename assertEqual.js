const assertEqual = function(actual,expected) {
  if (actual === expected) {
    return `✅: ${actual} === ${expected}`;
  }
    return(`🔴: ${actual} !== ${expected}`);
};

module.exports = assertEqual;

