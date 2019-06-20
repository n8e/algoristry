class Stack {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  first() {
    return this.size() ? this.data[0] : 'No elements in Stack';
  }

  last() {
    return this.size() ? this.data[this.data.length - 1] : 'No elements in Stack';
  }

  stack(record) {
    this.data.unshift(record);
  }

  unstack() {
    this.data.shift();
  }
}

const myStack = new Stack();

[21, 32, 43, 54, 65, 76].forEach(value => myStack.stack(value));

myStack.unstack();

console.log('Size:', myStack.size());
console.log('First:', myStack.first());
console.log('Last:', myStack.last());
