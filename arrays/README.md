<h1>Arrays</h1>
<div>
    <h3 id="tenMinutesWalk">1. Take a Ten Minutes Walk</h3>

 <p>You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk `(eg. ['n', 's', 'w', 'e'])`. You always walk only a single block for each letter `(direction)` and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes `(you don't want to be early or late!)` and will, of course, return you to your starting point. Return false otherwise.</p>

> Note: you will always receive a valid array containing a random assortment of direction letters `('n', 's', 'e', 'w')`. It will never give you an empty array (that's not a walk, that's standing still!).
<p>Example 1:</p>
<pre>
  <strong>Input:</strong> ['n','s','n','s','n','s','n','s','n','s']
  <strong>Output:</strong> true
  <strong>Explanation:</strong> you don't want to be early or late! means dx == 0 and dy == 0 since they are the ones which measure the time. dt must equal to 10
</pre>
    <div> The implementation is <a href="./tenMinutesWalk" target="_blank" >here</a></div>
</div>
