//const _Node = require('./node')

class _Node {
  constructor(value, next = null) {
    this.value = value; // data
    this.next = next; // pointer to the next node
  }
}

// _ means a private class should not be accessible by anyone else other than the 
// linked list class

class LinkedList {
  constructor() {
    this.head = null;   // beginning of list or first node in list, null because list empty
  }

  //insertion

  // insert first
  // 1. create a new node item
  // 2. Point the head to that new node

  insertFirst(item) {  // the item is the value you are putting in the 'head' node
    this.head = new Node(item, this.head /* null */);
  }

  //  ----------------- 
  // | 'hello' | null | 
  //  -----------------

  // insert last
  insertLast(item) {
    if (this.head === null) {  //if there are 0 nodes in list 
        this.insertFirst(item); //insert item as first item
    }
    else {
        let tempNode = this.head;  //store the first node in tempNode
        while (tempNode.next !== null) {  //while a node exists past the current node
          tempNode = tempNode.next;   // move the head until the next value is null 
        }
        tempNode.next = new _Node(item, null); //set the next position equal to the new node and make its pointer to the next node null
    }
  }
  // insert at


  //retrieval  find, getAt, getFirst, getLast

  find(item) {
    // Start at the head
    let currNode = this.head; //keeps track of the node we are indexing
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {  //while the value of the node is !== to the value you are searching for
      /* Return null if it's the end of the list and the item is not on the list*/
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode; 
  }

  // Removal: from beginning, from end, between 2 nodes

  remove(item) {
    // if list is empty
    if (!this.head) {
      return null;
    }
    // if node is head make the next node the new head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  remove(item) {
    // if list empty
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    
    let currNode = this.head;
    let prevNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found')
      return;
    }
    prevNode.next = currNode.next;
  }

}