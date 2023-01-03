// Checking square of element of an array in another array
// arr1 = [1,2,3,4], arr2 = [1,9,4,16]
// if(arr1[i] * arr1[i] === arr2[j])
// let isSquare = true

function inSquareCheck(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    let isSquare = false;
    console.log("Outer Loop");
    for (let j = 0; j < arr2.length; j++) {
      console.log("Inner Loop");
      if (arr1[i] * arr1[i] === arr2[j]) {
        isSquare = true;
        break;
      }
      if (j === arr2.length - 1) {
        if (!isSquare) {
          return false;
        }
      }
    }
  }
  return true;
}

const result = inSquareCheck([1, 2, 3, 4], [1, 9, 4, 16]);
console.log(result);

// Quadratic Time Complexity O(n^2)
