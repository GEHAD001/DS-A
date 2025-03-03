// Define Each Unit
class Node<T> {
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

// Define Structure
class Stack<T> {
  length: number = 0;
  top: null | Node<T> = null;

  push(value: T) {
    const newNode = new Node(value);

    if (!this.top) {
      this.top = newNode;
    } else {
      this.top.next = newNode;
    }

    this.length++;
    return this;
  }

  pop(): T | Error {
    if (!this.top) throw new Error("Can't Pop Empty Stack");

    const topHolder = this.top;
    this.top = this.top.pre;

    if (this.top) {
      this.top.next = null;
    }

    this.length--;
    return topHolder.value;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    return this.top?.value;
  }
}

class StackArray<T> {
  array: T[] = [];

  push(value: T) {
    this.array.push(value);

    return this.array.at(-1);
  }

  pop() {
    return this.array.pop();
  }

  isEmpty() {
    return this.array.length === 0;
  }

  peek() {
    return this.array.at(-1);
  }
}
