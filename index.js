// linked list is a linear data structure with an ordered collection of data
// unlike arrays they are not stored in sequential memory locations
// instead they linked together using a pointer
// each node has 2 things: actual data and a pointer or reference to the next node in the list
// the first element in the linked list is the head and the last is the tail 
// the last node in the list will have a pointer containing a reference to null


//create a node class to make a new node

class Node {
  constructor(data, next = null) {  //because last node references null
    this.data = data;
    this.next = next;
  }
}

/*const n1 = new Node(100);
console.log(n1) */

// create a linked list class

class LinkedList {
  constructor() {
    this.head = null; //means list is empty
    this.size = 0; // size of list
  }

  // insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head); // if head is not empty pushed value to next
    this.size++;
  }
  // insert last node
  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty make head
    if (!this.head) {
      this.head = node;
    } 
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }
  // insert between 2 nodes or at index
    insertAt(data, index) {
      // if index is out of range
      if (index < 0 || index >= this.size) {
        return;
      }
      // If first index
      if (index === 0) {
        this.head = new Node(data, this.head);
        return;
        }

        const node = new Node(data);
        let current, previous;

        // set current to first 
        current = this.head
        let count = 0;

        while(count < index) {
          previous = current; // Node before index we want to insert
          count++;
          current = current.next; // Node after index
        }

        node.next = current;
        previous.next = node;

        this.size
      }

  // get at index
      getAt(index) {
        let current = this.head; // beginning node
        let count = 0;
        while (current) {
          if (count == index) {
            console.log(current.data)
        }
        count++;
        current = current.next;
      }

      return null;
    }
  // remove at index
    removeAt(index) {
      if (index < 0 || index >= this.size) {
        return;
      }
      let current = this.head; //first node
      let previous;
      let count = 0;

      // remove first
      if (index == 0) {
        this.head = current.next;
      } else {
        while (count < index) {
          count ++; 
          previous = current;
          current = current.next;
        }
        previous.next = current.next;

      }

      this.size--;

    }

  // clear list
    
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // remove last

  // remove first
  

  // print list "data"
  printListData() {
    let current = this.head;
    while(current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

/*const n1 = {
  data: 100
};

const n2 = {
  data: 200
}

n1.next = n2;

console.log(n1) */

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(500, 2)
ll.removeAt(2);
ll.printListData();
//ll.getAt(1);