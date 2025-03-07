class Node<T> {
  value: T;
  next: Node<T> | null;

  constructor(value: T, next: Node<T> | null = null) {
    this.value = value;
    this.next = next;
  }
}

export default class LinkedList<T> {
  head: Node<T> | null;
  tail: Node<T> | null;
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

  isContain(value: T) {
    let iterator = this.head;
    while (iterator !== null) {
      if (iterator.value === value) return true;
      iterator = iterator.next;
    }

    return false;
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

  slice(start: number = 0, end: number = this.length) {
    if (start > end || start >= this.length || end > this.length || start < 0)
      throw new Error("Start Should be less then number of elements");

    let iterator = this.getByIndex(start);
    const newLinkedList = new LinkedList<T>();

    for (let i = start; i < end; i++) {
      newLinkedList.push(iterator?.value!);
      iterator = iterator?.next!;
    }

    return newLinkedList;
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

  copy() {
    const copyLinkedList = new LinkedList<T>();

    let iterator = this.head;
    while (iterator !== null) {
      copyLinkedList.push(iterator.value);
      iterator = iterator.next;
    }

    return copyLinkedList;
  }

  // Idea: Each Stack-Frame has Current Node & Pre Node, Then Start Reverse By Re-direct Current-Node Next Pointer To Pre-Node
  reverse({
    pre = null,
    current = this.head,
  }: {
    pre?: Node<T> | null;
    current?: Node<T> | null;
  }) {
    // Fall-Back when no Elements
    if (current === null || this.length === 1) return;

    // Base-Case (First Solution)
    if (current?.next === null) {
      current.next = pre;
      this.head = current;
      return current;
    }

    this.reverse({ pre: current, current: current?.next! });

    // Can't reverse before recursive function, because other problem depends on the `NEXT` of `CURRENT` Node
    current!.next = pre;

    if (current?.next === null) this.tail = current;
    return;
  }

  state() {
    console.log(this.print(), ` | Elements: ${this.length}`);
  }
}

export function reverseLinkedList(list: LinkedList<any>) {
  const copy = list.copy();

  if (copy.length < 2) return copy;

  // Pointers Setup
  let prePtr = null;
  let currentPtr = copy.head;
  let nextPtr = copy.head?.next;

  // Pointer Switch
  copy.head = copy.tail;
  copy.tail = currentPtr;

  // Reverse Iterations
  while (nextPtr !== null) {
    // Change Pointer Direction
    currentPtr!.next = prePtr;

    // Slide Pointers
    prePtr = currentPtr;
    currentPtr = nextPtr!;
    nextPtr = nextPtr?.next;
  }

  // last node reversing
  currentPtr!.next = prePtr;

  return copy;
}

//! Failed
// export function reverseLinkedListRecursively(
//   currentNode: Node<any>
// ): Node<any> {
//   // Is Last Node ?
//   if (currentNode.next === null) return currentNode;

//   let nextNode: Node<any> = reverseLinkedListRecursively(currentNode.next);

//   // re-direct pointer of next node to current node A -> B -> null TO A <-> B
//   nextNode.next = currentNode;

//   return currentNode;
// }

export function reverseLinkedListRecursively({
  pre = null,
  current,
}: {
  pre?: Node<any> | null;
  current: Node<any>;
}): [Node<any>, Node<any> | null] {
  // Base-Case first time will reverse happen, then start reverse everything.
  if (current.next === null) {
    current.next = pre;
    return [current, null];
  }

  let [head] = reverseLinkedListRecursively({
    pre: current,
    current: current.next,
  });
  current.next = pre;

  return [head, current];
}
