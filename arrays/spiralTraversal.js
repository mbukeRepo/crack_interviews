/**
   n: number of rows, m: number of columns
   time complexity: O(n * m)
   space complexity: O(n * m)
*/

const spiral = (array) => {
  let left = 0, right = array[0].length , top = 0, bottom = array.length;
  const res = [];
  while (left < right && top < bottom) {
    // working with top row
    for(let i = left; i < right; i++)
      res.push(array[top][i]);

    top++;
    // working with left column
    for(let i = top; i < bottom; i++)
      res.push(array[i][right - 1])

    right--;

    if(!((left < right) && (top < bottom)))
      break;
    // working with bottom row
    for(let i = right - 1; i >= left; i--)
      res.push(array[bottom - 1][i])
    bottom--;
    // working with right column
    for(let i = bottom - 1; i >= top; i--)
      res.push(array[i][left])
    left++;
  }
  return res;
}
console.log(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiral([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]));
