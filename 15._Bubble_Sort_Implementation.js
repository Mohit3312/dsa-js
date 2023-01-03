// Bubble Sort (Sorting..)
// A sorting algorithm where the largest values bubble up at the top

function bubbleSort(array) {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

const res = bubbleSort([2, 6, 1, 9, 4, 11, 15, 3, 7]);
console.log(res);
