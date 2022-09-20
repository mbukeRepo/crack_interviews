<h1>Arrays</h1>
<div>
    <h3 id="tenMinutesWalk">1. Take a Ten Minutes Walk</h3>

 <p>You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk `(eg. ['n', 's', 'w', 'e'])`. You always walk only a single block for each letter `(direction)` and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes `(you don't want to be early or late!)` and will, of course, return you to your starting point. Return false otherwise.</p>

> Note: you will always receive a valid array containing a random assortment of direction letters `('n', 's', 'e', 'w')`. It will never give you an empty array (that's not a walk, that's standing still!).
<p><strong>Example 1:</strong></p>
<pre>
  <strong>Input:</strong> ['n','s','n','s','n','s','n','s','n','s']
  <strong>Output:</strong> true
</pre>
<p><strong>Example 2:</strong></p>
<pre>
  <strong>Input:</strong> ['w','e','w','e','w','e','w','e','w','e','w','e']
  <strong>Output:</strong> false
</pre>
<p><strong>Example 3:</strong></p>
<pre>
  <strong>Input:</strong> ['w']
  <strong>Output:</strong> false
</pre>
<p><strong>Example 4:</strong></p>
<pre>
  <strong>Input:</strong> ['n','n','n','s','n','s','n','s','n','s']
  <strong>Output:</strong> false
</pre>
<div> The implementation is <a href="./tenMinutesWalk.js" target="_blank" >here</a></div>
</div>
<div>
  <h3 id="spiralMatrix">2. Spiral Matrix</h3>
  <div><p>Given an <code>m x n</code> <code>matrix</code>, return <em>all elements of the</em> <code>matrix</code> <em>in spiral order</em>.</p>

<p>&nbsp;</p>
<p><strong>Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg" style="width: 242px; height: 242px;">
<pre><strong>Input:</strong> matrix = [[1,2,3],[4,5,6],[7,8,9]]
<strong>Output:</strong> [1,2,3,6,9,8,7,4,5]
</pre>

<p><strong>Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg" style="width: 322px; height: 242px;">
<pre><strong>Input:</strong> matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
<strong>Output:</strong> [1,2,3,4,8,12,11,10,9,5,6,7]
</pre>
</div>
<div> The implementation is <a href="./spiralTraversal.js" target="_blank" >here</a></div>
</div>
