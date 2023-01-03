// Checking sum zero - Problem 1

// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4, 4] -> output

// input array should be sorted for below logic but above mentioned input array is already sorted.

function getSumPairZero(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    console.log("I am running");
    const sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

// o(n) linear time complexity
