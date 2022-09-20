const quicksort = (array, left, right) => {
  if(left < right) {
    const partitionIdx = partition(array, left, right);
    quicksort(array, left, partitionIdx - 1);
    quicksort(array, partitionIdx + 1, right);
  }
}

const partition = (array, left, right) => {
   const pivotElement = array[right];
   let partitionIdx = left;
   for(let j = left; j < right; j ++) {
     if((array[j] < pivotElement) ) {
       swap(array, partitionIdx, j);
       partitionIdx ++;
     }
   }
   swap(array, partitionIdx, right);
   return partitionIdx;
}
const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const array = [2, 7, 8, 6, 4, 1 , 9, 3, 5];
const array2 = [5, 3, 1, 6, 4, 2];
quicksort(array, 0, array.length - 1);
console.log(array);
