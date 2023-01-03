const arr = [8, 2, 4, 1, 3];

// Steps :
// 1. Consider 2nd element / 1st index - Starting point
// 2. arr[j] > cur - Swapping perform hogi

const sorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = cur;
  }
  return arr;
};

const res = sorted([8, 2, 4, 1, 3]);
console.log(res);

