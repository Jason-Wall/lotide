// TESTING FUNCTIONS ///////////////
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅: ${actual} === ${expected}`);
  } else {
    console.log(`🔴: ${actual} !== ${expected}`);
  }
};

// MAIN FUNCTION ////////////////////
const findKey = (obj, callback) => {
  for (const entry in obj) {
    if (callback(obj[entry])) {
      return entry;
    }
  }
  return undefined;
};


// TEST CODE ////////////////////////
const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 3 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};
const testFunc = (x) => x.stars === 2;
assertEqual(findKey(testObj, testFunc), 'Ora');
