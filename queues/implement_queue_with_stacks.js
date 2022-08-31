module.exports = class {
  constructor() {
    this.in = [];
    this.out = [];
  }

  enqueue(val) {
    this.in.push(val);
  }

  dequeue() {
    if (!this.out.length) {
      while(this.in.length) {
        this.out.push(this.in.pop())
      }
    }
    return this.out.pop();
  }
  peek() {
    if (!this.out.length) {
      while(this.in.length) {
        this.out.push(this.in.pop())
      }
    }
    return this.out[this.out.length - 1];
  }
  empty() {
    return this.in.length === 0 && this.out.length === 0;
  }
}
