// O(n)
const minValue = (numbers) => {
  return numbers.sort((a, b) => a - b)[0];
};

// O(1)
const isEven = (number) => {
  return number % 2 === 0;
};

console.log(minValue([2, 3, 7, 8, 4]));
console.log(isEven(4));
console.log(isEven(5));
