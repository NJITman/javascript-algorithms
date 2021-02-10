// Naive Approach - Use Each Coin Once
// Time = O(n)
const changeMakingSingleCoin = (coins, target) => {
  const sortedCoins = coins.sort((a, b) => b - a);
  let remainingValue = target;
  let totalCount = 0;
  const results = [];

  for (const coin of sortedCoins) {
    if (coin <= remainingValue) {
      results.push({ value: coin, count: 1 });
      remainingValue -= coin;
      totalCount++;
    }
  }

  return {
    coins: results,
    count: totalCount,
    total: target - remainingValue,
    target,
  };
};

// Refined Approach - Use Each Maximum Fit
// Time = O(n)
const changeMakingMaxCoin = (coins, target) => {
  const sortedCoins = coins.sort((a, b) => b - a);
  let remainingValue = target;
  let totalCount = 0;

  const results = [];

  for (const coin of sortedCoins) {
    const count = Math.floor(remainingValue / coin);
    if (count > 0) {
      results.push({ value: coin, count });
      remainingValue -= coin * count;
      totalCount += count;
    }
  }

  return {
    coins: results,
    count: totalCount,
    total: target - remainingValue,
    target,
  };
};

// Time = O(n)
const changeMaking = (coins, target) => {
  let remainingValue = target;

  const selectedCoins = {
    coins: [],
    count: 0,
  };

  for (const coin of coins) {
    const count = Math.floor(remainingValue / coin);
    if (count > 0) {
      selectedCoins.coins.push({ value: coin, count });
      selectedCoins.count += count;
      remainingValue -= coin * count;
    }
  }

  return {
    coins: selectedCoins.coins,
    count: selectedCoins.count,
    total: target - remainingValue,
    target,
  };
};

// Time = O(n^2)
const computeChangeWrapper = (coins, target) => {
  const results = [];
  for (let i = 0; i < coins.length; i++) {
    results.push(changeMaking(coins.slice(i), target));
  }
  results.sort((a, b) => a.count - b.count);
  return results[0];
};

// const coins = [100, 50, 25, 20, 10, 5, 2, 1];
const coins = [8, 6, 5, 1];

// console.log(changeMakingSingleCoin(coins, 129));
// console.log(changeMakingMaxCoin(coins, 129));
// console.log(changeMaking(coins, 129));
// console.log(changeMakingMaxCoin(coins, 11));
// console.log(changeMaking(coins, 11));
console.log(computeChangeWrapper(coins, 11));
