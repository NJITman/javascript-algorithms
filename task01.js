// O(n)
const sumNumbers1 = (numbers) => {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result;
};

// O(n)
const sumNumbers2 = (numbers) => {
  return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(sumNumbers1([1, 2, 3, 4, 5]));
console.log(sumNumbers2([1, 2, 3, 4, 5]));
