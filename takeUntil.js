// Push elements to a new array until callback function is satisfied (true)
const takeUntil = (arr, callback) => {
  const results = [];

  for (const element of arr) {
    
    if (callback(element)) {
      return results;
    }
    results.push(element);
  }
  
  return results;
};

module.exports = takeUntil;