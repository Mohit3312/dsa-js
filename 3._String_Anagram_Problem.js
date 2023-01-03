// String Anagram
// "hello" -> "llheo"
// "ajay" -> "aaay"

// Condition :-
// Length check (for both Strings)
// String "hello"
// {h:1, e:1, l:2, o:1} => {h:1, e:1, l:1, o:1} => {h:1, e:1, l:0, o:1} => {h:0, e:1, l:0, o:1} => {h:0, e:0, l:0, o:1} => {h:0, e:0, l:0, o:0}

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  let counter = {};
  for (const letter of string1) {
    counter[letter] = (counter[letter] || 0) + 1;
    // console.log(counter[letter]);
  }
  //   console.log(counter);

  for (const item of string2) {
    if (!counter[item]) {
      console.log(`${item}:${counter[item]} => ${item} doesn't exists`);
      return false;
    }

    console.log(`${item}:${counter[item]} => ${item} exists`);
    counter[item] -= 1;
  }

  return true;
}

const check1 = isAnagram("hello", "llheo");
console.log(check1);
const check2 = isAnagram("ajay", "aaay");
console.log(check2);

// linear time complexity o(n)
