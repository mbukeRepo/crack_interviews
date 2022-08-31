const MyQueue = require("./implement_queue_with_stacks");

const myQueue = new MyQueue();
myQueue.enqueue(1);
myQueue.enqueue(2); // [1,2]
console.log(myQueue.peek());  // 1
console.log(myQueue.dequeue());   // 1
console.log(myQueue.empty())
