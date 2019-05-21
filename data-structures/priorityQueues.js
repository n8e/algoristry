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
    if (this.isEmpty()) return 'No elements in Queue';

    return this.items[0];
  }

  rear() {
    if (this.isEmpty()) return 'No elements in Queue';

    return this.items[this.items.length - 1];
  }

  printPQueue() {
    var str = '';
    for (var i = 0; i < this.items.length; i++) {
      str += this.items[i].element + ' ';
    }
    return str;
  }

  enqueue(element, priority) {
    let queueElement = new QueueElement(element, priority);
    let containsPriorityGreaterThanNewElement = false;

    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > queueElement.priority) {
        this.items.splice(i, 0, queueElement);
        containsPriorityGreaterThanNewElement = true;
        break;
      }
    }

    if (!containsPriorityGreaterThanNewElement) {
      this.items.push(queueElement);
    }
  }

  dequeue() {
    if (this.isEmpty()) return 'Underflow';

    return this.items.shift();
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
