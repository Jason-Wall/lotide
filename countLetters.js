//TESTING FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`🔴: ${actual} !== ${expected}`);
  }
};


//MAIN FUNCTION
const countLetters = function(str) {
  const results = {};
  for (let letter of str) {
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



const test = countLetters("lighthouse in the house");

assertEqual(test["h"], 4);
assertEqual(test[" "], undefined);
assertEqual(test["l"], 1);