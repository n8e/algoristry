class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length == 0;
  }

  front() {
    return this.isEmpty() ? 'No elements in Queue' : this.items[0];
  }

  rear() {
    return this.isEmpty() ? 'No elements in Queue': this.items[this.items.length - 1];
  }

  printPQueue() {
    var str = '';
    for (var i = 0, n = this.items.length; i < n; i++) {
      str += this.items[i].element + ' ';
    }
    return str;
  }

  enqueue(element, priority) {
    let queueElement = new QueueElement(element, priority);
    let hasLesserPriority = true;

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority < queueElement.priority) {
        this.items.splice(i, 0, queueElement);
        hasLesserPriority = false;
        break;
      }
    }

    if (hasLesserPriority) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    return this.isEmpty() ? 'Underflow' : this.items.shift();
  }
}

let myPQ = new PriorityQueue();

console.log(myPQ.isEmpty());
console.log('---------------------');
console.log(myPQ.front());
console.log('---------------------');
console.log(myPQ.dequeue());
console.log('---------------------');

myPQ.enqueue('Priority2-1', 2); 
myPQ.enqueue('Priority1-1', 1); 
myPQ.enqueue('Priority1-2', 1); 
myPQ.enqueue('Priority2-2', 2); 
myPQ.enqueue('Priority3', 3);

// console.log(myPQ);
console.log(myPQ.printPQueue());
console.log('---------------------');
console.log(myPQ.front());
console.log('---------------------');
console.log(myPQ.rear());
console.log('---------------------');
console.log(myPQ.dequeue());
console.log('---------------------');

myPQ.enqueue('Sunil', 2);

console.log(myPQ.printPQueue());
