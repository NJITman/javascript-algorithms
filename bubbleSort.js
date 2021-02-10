// Time = O(n^2)
// Space = O(1)
const bubbleSort = (list, order) => {
  let didSwap = false;
  const results = [...list];

  do {
    didSwap = false;
    for (let i = 0; i < results.length - 1; i++) {
      if (order.toUpperCase() === 'ASC' && results[i] > results[i + 1]) {
        const temp = results[i];
        results[i] = results[i + 1];
        results[i + 1] = temp;
        didSwap = true;
      } else if (
        order.toUpperCase() === 'DESC' &&
        results[i] < results[i + 1]
      ) {
        const temp = results[i];
        results[i] = results[i + 1];
        results[i + 1] = temp;
        didSwap = true;
      }
    }
  } while (didSwap);
  return results;
};

console.log(bubbleSort([4, 6, 2, 1, 7, 9, 3], 'desc'));
