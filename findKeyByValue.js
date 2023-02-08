// TEST FUNCTIONS
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`🔴: ${actual} !== ${expected}`);
  }
};

// MAIN FUNCTIONS
const findKeyByValue = function(keyList, val) {
  for (const key in keyList) {
    if (keyList[key] === val) {
      return key;
    }
  }
};


// TEST CODE
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);