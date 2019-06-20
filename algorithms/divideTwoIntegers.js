// without multiplication, division or modulus operators

function divide(dividend, divisor) {
  var quotient = 0, sign;

  if (divisor === 0) return 'Infinity';
  if (dividend === 0) return quotient;

  if (dividend < 0 && divisor < 0 || dividend > 0 && divisor > 0) {
    sign = 1;
  }

  if (dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0) {
    sign = -1;
  }

  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  while (dividend >= divisor) {
    dividend -= divisor;
    quotient++;
  }

  return quotient * sign;
}

console.log(divide(-40, 4));
