function displayUsers(usersArray) {
  let tr = "";
  for (let i = 0; i < usersArray.length; i++) {
    let user = usersArray[i];
    tr = `
    <tr>
        <td>${user.email}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.age}</td>
        <td>${user.address}</td>
        <td>${user.payment}</td>
        <td>${user.phoneNumber}</td>
        <td style="background-color:${user.color}"></td>
    </tr>
    `;
    console.log(user);
    $("#user-table").append(tr);
  }
}

function init() {
  let usersList = readUsers();
  displayUsers(usersList);
}

window.onload = init;
