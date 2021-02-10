// Time = O(log n)
// Space = O(n)
const mergeSort = (list) => {
  if (list.length < 2) {
    return list;
  }

  if (list.length === 2) {
    return list[0] > list[1] ? [list[1], list[0]] : list;
  }

  const middle = Math.floor(list.length / 2);
  const leftArray = list.slice(0, middle);
  const rightArray = list.slice(middle);

  const leftSorted = mergeSort(leftArray);
  const rightSorted = mergeSort(rightArray);

  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftSorted.length || rightIndex < rightSorted.length) {
    if (
      leftIndex >= leftSorted.length ||
      leftSorted[leftIndex] > rightSorted[rightIndex]
    ) {
      merged.push(rightSorted[rightIndex]);
      rightIndex++;
    } else {
      merged.push(leftSorted[leftIndex]);
      leftIndex++;
    }
  }

  return merged;
};

console.log(mergeSort([4, 8, -10, 3, 24, 5]));
