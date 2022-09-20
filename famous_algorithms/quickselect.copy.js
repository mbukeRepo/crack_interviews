const quickselect = (array, left, right, idxToFind) => {
  if(left < right) {
     const partitionIdx = partition(array, left, right);
     if(partitionIdx === idxToFind) {
       return array[partitionIdx]
     } else if (partitionIdx > idxToFind) {
       return quickselect(array, left, partitionIdx - 1, idxToFind);
     } else {
       return quickselect(array, partitionIdx + 1, right, idxToFind);
     }
  }
};

const partition = (array, left, right) => {
   let partitionIdx = left;
   const pivot = array[right];
   for(let i = left; i < right; i++) {
      if(array[i] < pivot) {
        swap(array, partitionIdx, i);
        partitionIdx++;
      }
   }
   swap(array, partitionIdx, right);
   return partitionIdx;
};

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};


const arr = [5, 3, 1, 6, 4, 2]
quickselect(arr, 0, arr.length - 1, 4)
console.log(arr[4]);
