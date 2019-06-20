class Queue{
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  first() {
    return this.size() ? this.data[this.data.length - 1] : 'No elements in Queue';
  }

  last() {
    return this.size() ? this.data[0] : 'No elements in Queue';
  }

  enqueue(record) {
    this.data.unshift(record);
  }

  dequeue() {
    this.data.pop();
  }
}

const myQ = new Queue();

[21, 32, 43, 54, 65, 76].forEach(value => myQ.enqueue(value));

myQ.dequeue();

console.log('Size:', myQ.size());
console.log('First:', myQ.first());
console.log('Last:', myQ.last());
