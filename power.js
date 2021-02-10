// O(log(n)) or O(log,radix(n))
const isPower = (number, radix) => {
  let test = number;
  while (test > radix) {
    if (test % radix !== 0) return false;
    test /= radix;
  }
  return number >= radix;
};

// O(1)
const isPower2 = (number) => {
  if (number < 1) return false;
  return (number & (number - 1)) === 0;
};

console.log(isPower(32, 2));
console.log(isPower2(32));
