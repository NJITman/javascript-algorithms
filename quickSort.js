// Time = O(n log n)
// Space = O(n)
const quickSort = (list) => {
  const results = [...list];
  if (results.length <= 1) {
    return results;
  }

  const pivot = results.shift();
  const smallerChunk = [];
  const biggerChunk = [];
  const centerChunk = [pivot];

  while (results.length) {
    const current = results.shift();
    if (current === pivot) {
      centerChunk.push(current);
    } else if (current < pivot) {
      smallerChunk.push(current);
    } else {
      biggerChunk.push(current);
    }
  }

  const smallerChunkSorted = quickSort(smallerChunk);
  const biggerChunkSorted = quickSort(biggerChunk);

  return smallerChunkSorted.concat(centerChunk, biggerChunkSorted);
};

console.log(quickSort([10, 2, -1, 5, 25, 10]));
