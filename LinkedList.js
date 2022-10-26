class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  add(element) {
    //creates a new node
    let node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      //iterate to the end of the list
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  removeEle(ele) {
    let current, previous;
    current = this.head;
    if (current.element === ele) {
      this.head = current.next;
    } else {
      while (current.element !== ele) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
  nodeSize() {
    return this.size;
  }
  getNodeEle(index) {
    let current = this.head;
    let finder = 1;
    let found = "";
    while (current.next) {
      if (finder === index) {
        found = current.element;
      }
        current = current.next;
        finder++;
    }
    if ((current.next === null) & (index === this.size)) {
      return (found = current.element);
    }
    if(found.length < 1) {
       return "no such element";
    }else return found;
  }
  describeNode() {
    let current = this.head;
    while (current.next) {
      console.log(current.element);
      current = current.next;
    }
    console.log(current.element);
  }
  removeAtIndex(index){
    let current, previous;
    current = this.head;
    while(current.next) {

    }
    this.size--;
  }
}

const ls = new LinkedList();
ls.add("first");
ls.add("second");
ls.add("third");
ls.add("last");
// console.log(ls.nodeSize());
// console.log(ls)
console.log(ls.nodeSize());
console.log(ls.getNodeEle(3));
ls.remove("third");
console.log(ls.getNodeEle(3));
console.log(ls.describeNode());
