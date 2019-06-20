function recurse(num, str) {
  if (num <= 0) {
    return str;
  }

  var quotient = Math.floor(num / 10), modulus = num % 10;
  return recurse(quotient, str + modulus);
}

function reverse(x) {
  var reverseString = recurse(x, '');

  return parseInt(reverseString);
}

console.log(reverse(958));
