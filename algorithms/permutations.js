function numFactorial(n) {
  return n <= 1 ? 1 : n * numFactorial(n - 1);
}

function permutation(a, b) {
  return numFactorial(a) / numFactorial(a - b);
}

console.log(permutation(3, 2));