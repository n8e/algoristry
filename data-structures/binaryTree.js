class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(data) {
    this.root = new TreeNode(data);
  }

  insert(value) {
    var queue =  [this.root],
        currentNode;

    while (queue.length) {
      currentNode = queue.shift();

      if (currentNode.left && currentNode.right) {
        queue.push(currentNode.left, currentNode.right);
      } else {
        break;
      }
    }

    if (!currentNode.left) {
      currentNode.left = new TreeNode(value);
    } else {
      currentNode.right = new TreeNode(value);
    }
  }
}

var bt = new BinaryTree(1);
[2, 3, 4, 5, 6, 7, 8, 9].forEach(value => bt.insert(value));

console.log(bt);