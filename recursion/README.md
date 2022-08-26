# Recursion

<h3>1. Return the n-th value of a Fibonacci sequence recursively</h3>

<div><p>Let’s look at the diagram that will help you understand what’s going on here with the rest of our code. Function fib is called with argument 5:</p>
<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://github.com/orahpsalm/alx_crack_interviews/blob/orah/recursion/images/nth_value_of_fib_sequence.png?raw=true" style="width: 542px; height: 222px;">

<p>Basically our fib function will continue to recursively call itself creating more and more branches of the tree until it hits the base case, from which it will start summing up each branch’s return values bottom up, until it finally sums them all up and returns an integer equal to 5.</p>

<p><strong>Time Complexity:</strong> O(2^n)</p>
<p><strong>Space Complexity:</strong>
In case of recursion the solution take exponential time, that can be explained by the fact that the size of the tree exponentially grows when n increases. So for every additional element in the Fibonacci sequence we get an increase in function calls. Big O in this case is equal to O(2^n). Exponential Time complexity denotes an algorithm whose growth doubles with each addition to the input data set. </p>

<div><p> The implementation is <a href="./nth_value_of_fibonacci.py" target="_blank">here</a></p></div>
