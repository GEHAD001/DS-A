export default class StackArray<T> {
  data: T[] = [];
  min: T | null = null;

  // O(1)
  push(item: T) {
    this.data.push(item);
    return this;
  }

  // O(1)
  pop() {
    if (!this.data.length) throw new Error(`Can't Pop Empty Stack`);
    return this.data.pop();
  }

  // O(1)
  // make devs controls on the return value if the stack empty
  top({ onEmpty = null }: { onEmpty: any }) {
    if (!this.data.length) return onEmpty;

    return this.data.at(-1);
  }

  // O(1)
  get length() {
    return this.data.length;
  }
}
