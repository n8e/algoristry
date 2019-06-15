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

let myStack = new Stack();

myStack.stack(21);
myStack.stack(32);
myStack.stack(43);
myStack.stack(54);
myStack.stack(65);
myStack.stack(76);
myStack.unstack();

console.log('Size:', myStack.size());
console.log('First:', myStack.first());
console.log('Last:', myStack.last());
