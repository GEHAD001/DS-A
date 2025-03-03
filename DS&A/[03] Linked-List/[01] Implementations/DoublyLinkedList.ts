// =============================================================================
// Most Condition Can Read It Easily with length, but here used Tail & Head for TypeScript Warning.
// =============================================================================

export class Node<T> {
  value: T;
  next: Node<T> | null;
  pre: Node<T> | null;

  constructor(
    value: T,
    next: Node<T> | null = null,
    pre: Node<T> | null = null
  ) {
    this.value = value;
    this.next = next;
    this.pre = pre;
  }
}

export class DoublyLinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;
  length: number = 0;

  push(value: T) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
      this.length++;
      return this;
    }

    newNode.pre = this.tail;
    this.tail.next = newNode;
    this.tail = this.tail.next;

    this.length++;

    return this;
  }

  pop() {
    if (!this.tail) throw new Error("Can't Pop Empty Doubly Linked-List");

    const tempTailPtr = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.pre;
      this.tail!.next = null;
      tempTailPtr.pre = null;
    }

    this.length--;
    return tempTailPtr.value;
  }

  unshift(value: T) {
    if (!this.head) return this.push(value);

    const newNode = new Node(value);

    // Connect NEW-NODE with Linked-List from Begin
    newNode.next = this.head;
    this.head.pre = newNode;

    // Shift Head-Ptr to the new begin NODE.
    this.head = newNode;

    this.length++;
    return this;
  }

  shift() {
    if (!this.head) throw new Error("Can't Shift Empty Doubly Linked-List");

    const tempHeadPtr = this.head;

    if (!this.head.next) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.pre = null;
      tempHeadPtr.next = null;
    }

    this.length--;
    return tempHeadPtr.value;
  }

  search(value: T, node: Node<T> | null = this.head): Node<T> | undefined {
    if (!node) return undefined;

    if (node.value === value) return node;

    return this.search(value, node!.next);
  }

  getIndex(index: number): Node<T> {
    if (index >= this.length || index < 0) throw new Error("Out of DLL Range");

    let currentNode = this.head;
    for (let i = 0; i !== index; i++) currentNode = currentNode!.next;

    return currentNode!;
  }

  state() {
    let message = "";
    let currentNode = this.head;

    while (currentNode !== null) {
      message +=
        message === "" ? `${currentNode.value}` : ` -> ${currentNode.value}`;
      currentNode = currentNode.next;
    }

    message += message === "" ? "Empty" : ` -> null | ${this.length}`;

    console.log(message);

    return this;
  }
}
