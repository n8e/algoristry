/*
  github.com/n8e
  Example: run $ node factorial.js 5
  Should print: Value: 5, Factorial = 120
*/

const factorial = (n) => {
    let result = 1;
    for(var i = n; i > 0; i -= 1) {
        result *= i;
    }
    return result;
};


// print process.argv
process.argv.forEach((val, index, array) => {
  if(index === 2) {
    console.log(`Value : ${val}, Factorial = ${factorial(parseInt(val))}`);
  }
});
