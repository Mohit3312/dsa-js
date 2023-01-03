// How do you check if a given string is a Palindrome

// dad -> dad => true
// level -> level => true
// ajay -> yaja => false
// noon -> noon => true

// 121 -> 121 => true

// case 1

// function isPal(str) {
//   let reverse = str.split("").reverse().join("");
//   console.log(reverse);

//   return str.toLowerCase() === reverse.toLowerCase();
// }

// console.log(isPal("level"));

// -------------------------------------------------------------

// case 2

function isPal(str) {
  let newStr = str.toLowerCase();
  let left = 0;
  let right = newStr.length - 1;

  while (left < right) {
    if (newStr[left] !== newStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPal("level"));
