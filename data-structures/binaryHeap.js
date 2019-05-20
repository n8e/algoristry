class BinaryHeap {
  constructor(data) {
    this.heap = data;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      let element = this.heap[index];
      let parentIndex = Math.floor((index - 1)/2);
      let parent = this.heap[parentIndex];

      if (parent >= element) {
        return;
      }

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  extractMax() {
    let max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
    return max;
  }

  sinkDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;

    const length = this.heap.length;

    if (
      left <= length &&
      this.heap[left] > this.heap[largest]
    ) {
      largest = left
    }

    if (
      right <= length &&
      this.heap[right] > this.heap[largest]
    ) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]];
      this.sinkDown(largest);
    }
  }
}

let myHeap = new BinaryHeap([30, 20, 10, 7, 9, 5]);

myHeap.extractMax();
console.log('Extract Max:', myHeap.heap);

myHeap.insert(40);
myHeap.insert(15);
console.log('Inserted 40 and 15:', myHeap.heap);

