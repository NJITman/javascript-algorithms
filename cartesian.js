// Time = O(n*m)
// Space = O(n*m)
const cartesianProduct = (set1, set2) => {
  const results = [];

  for (let item1 of set1) {
    if (!Array.isArray(item1)) {
      item1 = [item1];
    }
    for (const item2 of set2) {
      results.push([...item1, item2]);
    }
  }

  return results;
};

// Time = O(n^m)
// Space = O(n^m)
const cartesianGeneral = (...sets) => {
  let results = sets[0];

  for (let i = 1; i < sets.length; i++) {
    results = cartesianProduct(results, sets[i]);
  }

  return results;
};

console.log(cartesianProduct(['Blue', 'Red'], ['M', 'L']));
console.log(
  cartesianGeneral(['Blue', 'Red'], ['M', 'L'], ['Round Neck', 'V Neck'])
);
