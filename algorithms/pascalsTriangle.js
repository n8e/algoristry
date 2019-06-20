function generatePascalsTriangle(numRows) {
  var triangle = [];

  if (numRows === 0) return triangle;

  triangle.push([1]);

  for (var i = 1; i < numRows; i++) {
    var row = [], prevRow = triangle[i - 1];
    row.push(1);
    for (var j = 1; j < prevRow.length; j++) {
      row.push(prevRow[j - 1] + prevRow[j]);
    }
    row.push(1);
    triangle.push(row);
  }

  return triangle;
}

console.log(generatePascalsTriangle(0));
console.log(generatePascalsTriangle(1));
console.log(generatePascalsTriangle(2));
console.log(generatePascalsTriangle(5));
console.log(generatePascalsTriangle(7));
