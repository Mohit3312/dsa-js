// Divide & Conquerer Technique
// Find the index of given no. (7) in a sorted array
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==> index 6 => output

// min = 0, element = 1
// max = array.length, element = 15
// mid = (min+max)/2 => (0+14) => 7 (index), element = 8

// if array[mid] < number (7) => (min = mid + 1) and (mid = (min+max)/2)
// else if array[mid] > number (7) => (mix = mid - 1) and (mid = (min+max)/2)
// else return mid

function searchAlgo(arr, num) {
  let min = 0;
  let max = arr.length;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    console.log(`mid=${mid} min=${min} max=${max}`);
    if (arr[mid] < num) {
      min = mid + 1;
    } else if (arr[mid] > num) {
      max = mid - 1;
    } else if (arr[mid] === num) {
      return mid;
    } else {
      return -1;
    }
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const number = 7;

const index = searchAlgo(array, number);

console.log(`${number} is found on ${index}th index`);


// Binary time complexity = O(log(n))