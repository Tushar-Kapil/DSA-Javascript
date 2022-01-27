//       9
//    4      20
//  1   6  15  170

// IN ORDER = [1, 4, 6, 9, 15, 20, 170]
// PRE ORDER = [9, 4, 1, 6, 20, 15, 170]
// POST ORDER = [1, 6, 4, 15, 170, 20, 9]

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // LEFT
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // RIGHT
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (value === currentNode.value) {
        return currentNode;
      }
    }
    return undefined;
  }

  DFSInorder() {
    return traverseInOrder(this.root, []);
  }

  DFSPreorder() {
    return traversePreOrder(this.root, []);
  }

  DFSPostorder() {
    return traversePostOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }

  list.push(node.value);

  if (node.right) {
    traverseInOrder(node.right, list);
  }

  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);

  if (node.left) {
    traversePreOrder(node.left, list);
  }

  if (node.right) {
    traversePreOrder(node.right, list);
  }

  return list;
}

function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }

  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);

  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.DFSInorder());
console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());
