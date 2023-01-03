// Count Unique Numbers

// [1,1,2,2,3,4,4,5,6,7,8,8] => [1,2,3,4,5,6,7,8,6,7,8,8]

// Output -> 8

// Conditions :
// i=0, j=1
// array[i]!==array[j]
// 1. i++
// 2. array[i]=array[j]

function countUnique(arr) {
  if (arr.length > 0) {
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is empty");
  }
}

const array = [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8];
const unique = countUnique(array);
console.log(unique);

// Linear time complexity o(n)
