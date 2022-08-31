<h2>Queues</h2>

<div>
<h4>1.Implement Queue using Stacks</h4>

<p>Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (<code>push</code>, <code>peek</code>, <code>pop</code>, and <code>empty</code>).</p>
<p>Implement the <code>MyQueue</code> class:</p>
<ul>
	<li><code>void enqueue(int x)</code> Pushes element x to the back of the queue.</li>
	<li><code>int dequeue()</code> Removes the element from the front of the queue and returns it.</li>
	<li><code>int peek()</code> Returns the element at the front of the queue.</li>
	<li><code>boolean empty()</code> Returns <code>true</code> if the queue is empty, <code>false</code> otherwise.</li>
</ul>
<p><strong>Notes:</strong></p>
<ul>
	<li>You must use <strong>only</strong> standard operations of a stack, which means only <code>push to top</code>, <code>peek/pop from top</code>, <code>size</code>, and <code>is empty</code> operations are valid.</li>
	<li>Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.</li>
</ul>
<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<pre>
MyQueue myQueue = new MyQueue();
myQueue.enqueue(1); // queue is: [1]
myQueue.enqueue(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.dequeue(); // return 1, queue is [2]
myQueue.empty(); // return false
</pre>
<p>The implementation is <a href="./implement_queue_with_stacks.js">here</a></p>
</div>
