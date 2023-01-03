// Selection Sort
// [0,2,34,22,10,19]

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
}

const res = selectionSort([0, 2, 34, 22, 10, 19]);
// const res = selectionSort([2, 6, 1, 9, 4, 11, 15, 3, 7]);
console.log(res);
