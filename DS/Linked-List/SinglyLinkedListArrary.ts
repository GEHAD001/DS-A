// NOTE: Cont... Later

export default class LinkedList<T> {
  private list: T[];

  constructor() {
    this.list = [];
  }

  push(value: T) {
    this.list.push(value);
    return this;
  }

  pop(value: T) {
    this.list.pop();
    return this;
  }

  unshift(value: T) {
    this.list.unshift(value);
  }

  shift() {
    this.list.shift();

    return this;
  }
}
