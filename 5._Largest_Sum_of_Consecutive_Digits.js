// [1, 2, 3, 4, 3, 5, 4, 6, 7, 8] => Total elements - 10
// Count largest sum of consecutive digits
// digit = 4
// sum = 25

// Conditions
// if(digit > array.length) => error message
// array.length - digit + 1
// 10 - 4 + 1 => 7

function findLargest(array, digit) {
  if (digit > array.length) {
    throw new Error("digit should not be greater than array length");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - digit + 1; i++) {
      let temp = 0;
      for (let j = i; j < digit + i; j++) {
        console.log(`i=${i} j=${j}`);
        temp += array[j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

const result = findLargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(`Result: ${result}`);
