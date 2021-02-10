// Time = O(n)
// Space = O(1)
const linearSearch = (list, search) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i] == search) return i;
  }
  return -1;
};

// Time = O(n)
// Space = O(1)
const linearSearch2 = (list, search) => {
  return list.indexOf(search);
};

console.log(linearSearch([1, 5, 7, 8, 9], 10));
console.log(linearSearch2([1, 5, 7, 8, 9], 5));
