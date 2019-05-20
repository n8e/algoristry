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

let myQ = new Queue();

myQ.enqueue(21);
myQ.enqueue(32);
myQ.enqueue(43);
myQ.enqueue(54);
myQ.enqueue(65);
myQ.enqueue(76);
myQ.dequeue();

console.log('Size:', myQ.size());
console.log('First:', myQ.first());
console.log('Last:', myQ.last());
