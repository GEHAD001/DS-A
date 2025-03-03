class StackMin<T> {
  values: T[] = [];
  minTrack: T[] = [];

  get top() {
    return this.values.at(-1);
  }

  push(element: T): StackMin<T> {
    // when stack empty
    if (this.top === undefined) {
      this.values.push(element);
      this.minTrack.push(element);
      console.log(this.minTrack);
      return this;
    }

    // when new element greater then current min, then push top of minStack again.
    if (element > this.minTrack.at(-1)!) {
      this.minTrack.push(this.minTrack.at(-1)!);
      this.values.push(element);
      return this;
    }

    // when new element less then top of minStack
    this.values.push(element);
    this.minTrack.push(element);

    return this;
  }

  pop() {
    if (!this.values.length) throw new Error(`Can't Pop Empty Stack`);

    this.minTrack.pop();
    return this.values.pop();
  }

  get min() {
    return this.minTrack.at(-1);
  }
}

const stack = new StackMin<number>();
stack.push(3).push(5).push(1).push(10).push(20).push(2);
