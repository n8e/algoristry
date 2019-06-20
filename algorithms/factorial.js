/*
  github.com/n8e
  Example: run $ node factorial.js 5
  Should print: Value: 5, Factorial = 120
*/

const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);

// print process.argv
process.argv.forEach((val, index, array) => {
  if(index === 2) {
    console.log(`Value : ${val}, Factorial = ${factorial(parseInt(val))}`);
  }
});
