const KEY_LS = "users";
function saveUser(user) {
  console.log(user);
  let oldUsers = readUsers();
  oldUsers.push(user);
  let val = JSON.stringify(oldUsers);
  console.log(val);
  localStorage.setItem(KEY_LS, val);
}

function readUsers() {
  let users = localStorage.getItem(KEY_LS);
  if (!users) {
    console.log("No users :(");
    return [];
  } else {
    console.log("We have users :)");
    let listUsers = JSON.parse(users);
    return listUsers;
  }
}
