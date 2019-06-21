// to check of the string provided has valid parethesis

function isValid(s) {
  var parensMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  },
  openingParens = ['(','{','['],
  closingParens = [')','}',']'],
  strArr = s.split(''),
  stack = [];

  for (var i = 0; i < strArr.length; i++) {
    if (openingParens.includes(strArr[i])) {
      stack.push(strArr[i]);
    }

    if (closingParens.includes(strArr[i])) {
      if (parensMap[stack[stack.length - 1]] === strArr[i]) {
        stack.pop();
      } else {
        break;
      }
    }
  }

  return !stack.length;
}

console.log(isValid('')); // true
console.log(isValid('()')); // true
console.log(isValid('()[]')); // true
console.log(isValid('(]')); // false
console.log(isValid('([)]')); // false
console.log(isValid('{[]}')); // true