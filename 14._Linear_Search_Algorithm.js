// Linear Search Algorithm

const users = [
  {
    username: "Rahul Singh",
    email: "rahul@gmail.com",
  },

  {
    username: "Manish Kumar",
    email: "rahul@gmail.com",
  },

  {
    username: "Akshay Tiwari",
    email: "rahul@gmail.com",
  },
];

function isUserExist(usersArr, name) {
  for (const item of usersArr) {
    if (item["username"] === name) {
      console.log(item["username"]);
      return true;
    }
  }
  return false;
}

console.log(isUserExist(users, "Rahul Singh"));
