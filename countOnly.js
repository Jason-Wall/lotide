// Returns an object of items: counts from an array based on an approval object.
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const key of allItems) {
    if (!itemsToCount[key]) {
      continue;
    }

    if (!results[key]) {
      results[key] = 0;
    }
    results[key] += 1;
  }
  return results;
};

module.exports = countOnly;