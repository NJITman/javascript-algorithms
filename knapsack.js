// Naive Solution - Only Takes 2 Items Maximum Into Consideration
// Input: [ items ], maxWeight
// Output: [ items: [], value: v, weight: w]
// Time = O(n^2)
const knapsack = (items, maxWeight) => {
  const process = [];

  for (const item1 of items) {
    if (item1.weight <= maxWeight) {
      process.push({ value: item1.value, weight: item1.weight, list: [item1] });
    }
    for (const item2 of items) {
      if (item1.name !== item2.name) {
        if (item1.weight + item2.weight <= maxWeight) {
          process.push({
            items: [item1, item2],
            value: item1.value + item2.value,
            weight: item1.weight + item2.weight,
          });
        }
      }
    }
  }

  return process.sort((a, b) => b.value - a.value)[0];
};

// Recursion Approach - Highest Time Complexity Due to 2 Recursive Calls
// Input: [ items ], maxWeight, index
// Output: [ items: [], value: v, weight: w]
// Time = O(2^n)
const knapsack2 = (items, maxWeight, index) => {
  if (maxWeight === 0 || index < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  if (maxWeight < items[index].weight) {
    return knapsack2(items, maxWeight, index - 1);
  }

  const addItem = knapsack2(items, maxWeight - items[index].weight, index - 1);
  const skipItem = knapsack2(items, maxWeight, index - 1);

  if (addItem.value + items[index].value > skipItem.value) {
    const newSack = {
      items: addItem.items.concat(items[index]),
      value: addItem.value + items[index].value,
      weight: addItem.weight + items[index].weight,
    };
    return newSack;
  } else {
    skipItem;
  }
};

// Recursion Approach with Memoization - Better Complexity Due to Storage of Intermediate Values
// Input: [ items ], maxWeight, index, memo
// Output: [ items: [], value: v, weight: w]
// Time = O(n*c) c=capacity
const knapsack3 = (items, maxWeight, index, memo) => {
  if (memo[maxWeight][index]) {
    return memo[maxWeight][index];
  }

  if (maxWeight === 0 || index < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  if (maxWeight < items[index].weight) {
    return knapsack3(items, maxWeight, index - 1, memo);
  }

  const addItem = knapsack3(
    items,
    maxWeight - items[index].weight,
    index - 1,
    memo
  );
  const skipItem = knapsack3(items, maxWeight, index - 1, memo);

  let results;

  if (addItem.value + items[index].value > skipItem.value) {
    const newItem = {
      items: addItem.items.concat(items[index]),
      value: addItem.value + items[index].value,
      weight: addItem.weight + items[index].weight,
    };
    results = newItem;
  } else {
    results = skipItem;
  }

  memo[maxWeight][index] = results;
  return results;
};

const knapsackWrapper = (items, maxWeight) => {
  const memo = Array.from(Array(maxWeight + 1), () =>
    Array(items.length).fill(undefined)
  );
  const index = items.length - 1;
  return knapsack3(items, maxWeight, index, memo);
};

// Greedy Approach - Linear Comparison, Easily Fooled by Different Order Samples
// Input: [ items ], maxWeight
// Output: [ items: [], value: v, weight: w]
// Time = O(n)
const knapsackGreedy = (items, maxWeight) => {
  const results = { items: [], value: 0, weight: 0 };
  let remainingWeight = maxWeight;

  for (const item of items) {
    if (item.weight <= remainingWeight) {
      results.items.push(item);
      results.value += item.value;
      results.weight += item.weight;
      remainingWeight -= item.weight;
    }
  }

  return results;
};

const items = [
  { name: 'a', value: 3, weight: 3 },
  { name: 'b', value: 6, weight: 8 },
  { name: 'c', value: 10, weight: 3 },
  { name: 'd', value: 4, weight: 2 },
];

// console.log(knapsack(items, 8));
// console.log(knapsack2(items, 8, items.length - 1));
// console.log(knapsackWrapper(items, 8));
console.log(knapsackGreedy(items, 8));
