/*
  github.com/n8e
  Example: run $ node factorial_recursive.js 5
  Should print: Value: 5, Factorial = 120
*/

const factorial = (n, result) => {
  if(n > 1) {
    result *= n;
    return factorial(n - 1, result);
  }
  return result;
};


// print process.argv
process.argv.forEach((val, index, array) => {
  if(index === 2) {
    let result = 1;
    console.log(`Value : ${val}, Factorial = ${factorial(parseInt(val), result)}`);
  }
});
