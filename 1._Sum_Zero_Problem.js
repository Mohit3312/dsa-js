// Checking sum zero - Problem 1

// [-5,-4,-3,-2,0,2,4,6,8] -> input
// [-4, 4] -> output

// input array should be sorted for below logic but above mentioned input array is already sorted.

function getSumPairZero(array) {
  for (i = 0; i < array.length; i++) {
    // console.log("Outer loop");
    for (j = i + 1; j < array.length; j++) {
      //   console.log("Inner loop");
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
}

const result = getSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

// o(n^2) quadratic time complexity
