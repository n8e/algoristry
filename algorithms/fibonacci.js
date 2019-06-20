function fibonacci(num) {
  var fib = [0, 1];

  if (num <= 0) return [];
  if (num === 1) return [fib[0]];
  if (num === 2) return fib;

  (function recurse(arr, num) {
    if (arr.length === num) {
      return arr;
    }

    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return recurse(arr, num);
  })(fib, num);

  return fib;
}

console.log(fibonacci(4));