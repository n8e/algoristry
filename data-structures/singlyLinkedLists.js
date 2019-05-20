class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(data) {
    const newNode = new Node(data);

    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  add(data) {
    const newNode = new Node(data);

    if(!this.head) {
      this.head = newNode;
      return this.head;
    }
    
    let current = this.head;
    
    while(current.next !== null) {
      current = current.next;
    }
    
    current.next = newNode;
    return this.head;
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while(node) {
      if(counter === index) {
        return node;
      }

      counter += 1;
      node = node.next;
    }

    return null;
  }

  insertAt(data, index) {
    if(!this.head) {
      this.head = new Node(data);
      return;
    }

    if(index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;

    return this.head;
  }

  deleteFirstNode() {
    if(!this.head) {
      return;
    }

    this.head = this.head.next;
    return this.head;
  }

  deleteLastNode() {
    if(!this.head) {
      return null;
    }

    if(!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let tail = this.head.next;

    while(tail.next !== null) {
      previous = tail;
      tail = tail.next;
    }

    previous.next = null;
    return this.head;
  }

  deleteAt(index) {
    if(!this.head) {
      this.head = new Node(data);
      return;
    }

    if(index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    if(!previous || !previous.next) {
      return
    }

    previous.next = previous.next.next;
    return this.head;
  }

  deleteList() {
    this.head = null;
  }

  traverse() {
    let current = this.head;

    while(current !== null) {
      console.log(current.data);
      current = current.next;
    }

    return this.head;
  }
}


let myLL = new LinkedList();
myLL.add(12);
myLL.add(99);
myLL.add(37);
myLL.prepend(31);
myLL.insertAt(42, 2);
myLL.traverse();
console.log('---------------');

myLL.deleteAt(2);
myLL.traverse();
