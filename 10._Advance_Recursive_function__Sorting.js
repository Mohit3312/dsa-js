// Sorting using Recursive Function
// [2,3,1,4] => By Default case
// [2,1,3,4] => case 1
// [1,2,3,4] => Final Output

const myArray = [2, 3, 1, 4, 9, 7, 11, 15, 12, 10];
let sortedArr = [];
let i = 0;
let j = 1;

function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function sortArray(array) {
  if (isSorted(array)) {
    sortedArr = array;
    return;
  } else if (array[i] > array[j]) {
    [array[i], array[j]] = [array[j], array[i]];
    i = 0;
    j = 1;
    sortArray(array);
  } else {
    i++;
    j++;
    sortArray(array);
  }
}

sortArray(myArray);
console.log(sortedArr);
