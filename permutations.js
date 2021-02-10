// Time = O(n!)
// Space =
const permutationsNoRep = (list) => {
  const results = [];
  if (list.length === 1) {
    return [list];
  }

  const item1 = list[0];
  const partials = permutationsNoRep(list.slice(1));

  for (let i = 0; i < partials.length; i++) {
    const partial = partials[i];
    for (let j = 0; j <= partial.length; j++) {
      const front = partial.slice(0, j);
      const rear = partial.slice(j);
      results.push(front.concat([item1], rear));
    }
  }

  return results;
};

const permutationsRep = (list, length) => {
  const results = [];
  if (length === 1) {
    return list.map((item) => [item]);
  }

  const partials = permutationsRep(list, length - 1);

  for (const item of list) {
    for (const permutation of partials) {
      results.push([item].concat(permutation));
    }
  }

  return results;
};

// console.log(permutationsNoRep(['Task 1', 'Task 2', 'Task 3', 'Task 4']));
// console.log(permutationsRep([1, 2, 3], 4));

module.exports = { permutationsNoRep };
