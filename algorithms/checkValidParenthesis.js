// if there is an unmatched parenthesis, then * can be used to close it

function checkValidString(s) {
  var strArr = s.split(''), lo = 0, hi = 0;

  for (var i = 0; i < strArr.length; i++) {
    lo += strArr[i] === '(' ? 1 : -1;
    hi += strArr[i] !== ')' ? 1 : -1;
    if (hi < 0) break;
    lo = Math.max(lo, 0);
  }

  return lo === 0;
}

console.log(checkValidString('')); // true
console.log(checkValidString('()')); // true
console.log(checkValidString('(*)')); // true
console.log(checkValidString('(*))')); // true
console.log(checkValidString('(((******))')); // true
console.log(checkValidString(')')); // false
console.log(checkValidString(')(')); // false