import { DoublyLinkedList } from "../../[03] Linked-List/[01] Implementations/DoublyLinkedList";

export class Stack<T> {
  stack = new DoublyLinkedList<T>();

  push(value: T) {
    this.stack.push(value);
    return this;
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack.tail;
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}
