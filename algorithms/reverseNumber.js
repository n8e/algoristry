function recurse(num, str) {
  if (num <= 0) {
    return str;
  }

  var quotient = Math.floor(num / 10), modulus = num % 10;
  return recurse(quotient, str + modulus);
}

function reverse(x) {
  if (x === 0) return 0;

  var reverseString = recurse(Math.abs(x), ''), sign = Math.sign(x);

  return sign * parseInt(reverseString);
}

console.log(reverse(958));
console.log(reverse(-395));
console.log(reverse(0));
