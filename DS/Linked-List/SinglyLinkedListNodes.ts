class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList<T> {
  private head: Node<T> | null;
  private tail: Node<T> | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getByIndex(index: number) {
    if (index < 0 || index >= this.length) {
      throw new Error("Out of Range");
    }

    let iterator = this.head;
    for (let i = 0; i !== index; i++) {
      iterator = iterator?.next!;
    }

    return iterator;
  }

  push(value: T) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;

    return this;
  }

  pop() {
    if (!this.length) {
      throw new Error("Can't Pop Empty Linked-List");
    }

    const tailHolder = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
      this.length--;

      return tailHolder;
    }

    this.tail = this.getByIndex(this.length - 2);
    this.tail!.next = null;
    this.length--;

    return tailHolder;
  }

  unshift(value: T) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
    this.length++;

    return this;
  }

  shift() {
    if (!this.head) throw new Error("Can't Unshift Empty LinkedList");

    if (this.length === 1) {
      this.head = this.tail = null;
      this.length = 0;
      return this;
    }

    this.head = this.head.next;
    this.length--;
    return this;
  }

  print() {
    let values = "";
    let iterator = this.head;
    while (iterator !== null) {
      values += `${iterator.value} -> `;
      iterator = iterator.next;
    }

    if (values) {
      values += " null";
    }

    return values;
  }

  state() {
    console.log(this.print(), ` | Elements: ${this.length}`);
  }
}
