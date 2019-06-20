function reverseStringWithArrayMethods(str) {
  return str.split('').reverse().join('');
}

function reverseStringWithoutArrayMethods(str) {
  var output = '', length = str.length;

  while (length > 0) {
    output += str.charAt(length - 1);
    length--;
  }

  return output;
}

console.log(reverseStringWithArrayMethods('hello'));
console.log(reverseStringWithoutArrayMethods('hello'));
