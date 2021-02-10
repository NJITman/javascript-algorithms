// Time = O(log n)
// Space = O(1)
const binarySearch = (list, search) => {
  let startIndex = 0;
  let endIndex = list.length - 1;
  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (search === list[middleIndex]) {
      return middleIndex;
    }

    if (search > list[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
};

// Time = O(log n)
// Space = O(n)
const binarySearch2 = (list, search, offset) => {
  let startIndex = 0;
  let endIndex = list.length - 1;
  const middleIndex = Math.floor((endIndex - startIndex) / 2);
  if (search === list[middleIndex]) {
    return middleIndex + offset;
  }

  if (search > list[middleIndex]) {
    startIndex = middleIndex + 1;
    return binarySearch2(
      list.slice(startIndex, endIndex + 1),
      search,
      offset + middleIndex + 1
    );
  } else {
    endIndex = middleIndex + 1;
    return binarySearch2(list.slice(startIndex, endIndex), search, offset);
  }
};

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7, 0));
console.log(binarySearch2([1, 3, 5, 7, 9, 11], 7, 0));
