function numFactorials(n) {
  return n <= 1 ? 1 : n * numFactorials(n - 1);
}

function combinations(a, b) {
  return numFactorials(a) / (numFactorials(b) * numFactorials(a - b));
}

console.log(combinations(3, 2));