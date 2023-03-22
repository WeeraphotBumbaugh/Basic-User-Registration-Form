function login() {
  let usersList = readUsers();
  let uname = $("#txtEmail").val();
  let pass = $("#txtPassword").val();
  let valid = true;
  for (let i = 0; i < usersList.length; i++) {
    let user = usersList[i];
    if (uname == user.email && pass == user.password) {
      window.location = "users.html";
      valid = true;
      break;
    } else {
      valid = false;
    }
  }
  if (!valid) {
    alert("Invalid Credentials");
  }
}
