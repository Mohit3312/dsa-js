// Find the maximum occurring character in given String

// Input - Hello World
// Output - l

// function getCharString(str) {
//   const arr = str.split("");
//   let map = {};
//   let max = 1;
//   let letter = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     map[arr[i]] = (map[arr[i]] || 0) + 1;
//     if (max < map[arr[i]]) {
//       max = map[arr[i]];
//       letter = arr[i];
//     }
//   }
//   console.log(letter);
// }

function getCharString(str) {
  let map = {};

  str.split("").forEach((element) => {
    map[element] = (map[element] || 0) + 1;
  });

  let max = 1;
  let letter = str[0];

  for (const key in map) {
    if (map[key] > max) {
      max = map[key];
      letter = key;
    }
  }
  console.log(letter);
}

getCharString("Hello World");
