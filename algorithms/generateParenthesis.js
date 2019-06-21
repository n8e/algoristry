function backtrack(output, currentString, openCount, closeCount, max) {
  if (currentString.length === max * 2) {
    return output.push(currentString);
  }

  if (openCount < max) {
    backtrack(output, currentString + '(', openCount + 1, closeCount, max);
  }

  if (closeCount < openCount) {
    backtrack(output, currentString + ')', openCount, closeCount + 1, max);
  }
}

function generateParens(num) {
  var output = [];

  backtrack(output, '', 0, 0, num);

  return output;
}

console.log(generateParens(1));
console.log(generateParens(2));
console.log(generateParens(3));
console.log(generateParens(4));