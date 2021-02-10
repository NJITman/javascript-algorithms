// O(n)
const fibonacciSeries = (n) => {
  const results = [];
  if (n > 0) {
    for (let i = 1; i <= n; i++) {
      if (i <= 2) {
        results.push(1);
      } else {
        results.push(results[i - 3] + results[i - 2]);
      }
    }
  }
  return results;
};

const fibonacci = (n) => {
  return fibonacciSeries(n)[n - 1];
};

// O(2^n)
const fibonacci2 = (n) => {
  if (n <= 2) {
    return 1;
  }
  return fibonacci2(n - 2) + fibonacci2(n - 1);
};

// O(n)
const fibonacci3 = (n, memo) => {
  let result;
  if (memo[n]) {
    return memo[n];
  }
  if (n <= 2) {
    result = 1;
  } else {
    result = fibonacci3(n - 1, memo) + fibonacci3(n - 2, memo);
  }
  memo[n] = result;
  return result;
};

console.log(fibonacci(200));
console.log(fibonacci2(10));
console.log(fibonacci3(100, {}));
