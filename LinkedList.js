class LinkedList {
  constructor(head) {
    this.head = head;
  }

  addItem(elem) {
    let current = this.head;

    if (current == null) {
      return this.head = elem;
    }

    while (current.next) {
      current = current.next;
    }

    current.next = elem;
  }

  size() {
    if (this.head === null) 0;

    let size = 1;
    let current = this.head;

    while (current.next) {
      size += 1;
      current = current.next;
    }

    return size;
  }

  removeElemAt(index) {
    let i = 0;
    let current = this.head;

    while (current.next) {
      if (i === index - 1) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }

      i++
    }
  }

  updateElemAt(index, newElem) {
    let i = 0;
    let current = this.head;

    while (current.next) {
      if (i === index - 1) {
        current.next.value = newElem;
      } else {
        current = current.next;
      }

      i++;
    }
  }
}

// const myList = new LinkedList();
// myList.addItem({ value: '', next: null });
// myList.addItem({ value: 1, next: null });
// myList.addItem({ value: false, next: null });
// myList.removeElemAt(2);  false
// myList.updateElemAt(0, 1); '' = 1
// myList.size();  2 


