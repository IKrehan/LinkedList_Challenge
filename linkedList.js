class Node {
  constructor(value, nextNode, index = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class List {
  constructor() {
    this.head = null;
    this.counter = 0;
  }

  add(value) {
    let nextNode = this.head ? this.head : null;
    this.head = new Node(value, nextNode);
    this.counter++;
  }

  delete(index = 0) {
    if (this.isEmpty()) return;

    let i = this.counter - 1;

    if (i == index) {
      this.head = this.head.nextNode;
      return;
    }

    if (this.head.nextNode == null) {
      this.head = null;
      return;
    }

    let previousNode;
    let currentNode = this.head;

    while (currentNode != null) {
      if (i == index) {
        previousNode.nextNode = currentNode.nextNode;
        return;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
      i--;
    }
  }

  printAllElements() {
    if (this.isEmpty()) return null;

    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode);
      currentNode = currentNode.nextNode;
    }
  }

  contains(targetValue) {
    if (this.isEmpty()) return null;

    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.value == targetValue) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  count() {
    return this.counter;
  }

  isEmpty() {
    return this.head ? false : true;
  }
}

// Tests

linkedList = new List()

// Add/printAllElements
console.log('Add/printAllElements')

linkedList.printAllElements()

linkedList.add("Cachorro")
linkedList.add("Gato")
linkedList.add("Cavalo")
linkedList.add("Papagaio")

linkedList.printAllElements()

console.log('')


// Count
console.log('Count')

console.log(linkedList.count())

console.log('')


// Delete
console.log('Delete')

linkedList.delete(0)
linkedList.delete(3)
linkedList.delete(4)

linkedList.printAllElements()
console.log('')


// Contains
console.log('Contains')

console.log(linkedList.contains("Humano"))
console.log(linkedList.contains("Gato"))
console.log('')


// isEmpty
console.log('isEmpty')
console.log(linkedList.isEmpty())




