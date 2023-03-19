function User(e, p, f, l, a, ad, ph, pa, c) {
  this.email = e;
  this.password = p;
  this.firstName = f;
  this.lastName = l;
  this.age = a;
  this.address = ad;
  this.phoneNumber = ph;
  this.payment = pa;
  this.color = c;
}

function validate(aUser) {
  let valid = true;

  $("#txtEmail").removeClass("error");
  $("#txtPassword").removeClass("error");
  $("#txtFirstName").removeClass("error");
  $("#txtLastName").removeClass("error");

  if (aUser.email === "") {
    valid = false;
    displayNotification("Please fill out the required fields.", "error");
  }
  if (aUser.password === "") {
    valid = false;
    displayNotification("Please fill out the required fields", "error");
  }
  if (aUser.firstName === "") {
    valid = false;
    displayNotification("Please fill out the required fields", "error");
  }
  if (aUser.lastName === "") {
    valid = false;
    displayNotification("Please fill out the required fields", "error");
  }
  if (aUser.payment === "") {
    valid = false;
    displayNotification("Please fill out the required fields", "error");
  }
  return valid;
}
function displayNotification(msg, notificationType) {
  let DIV = $("#notifications");
  DIV.removeClass("hide error success");
  DIV.addClass(notificationType).text(msg);
}
function hideNotification() {
  let DIV = $("#notifications");
  DIV.addClass("hide");
}
function register() {
  let inputEmail = $("#txtEmail").val();
  let inputPassword = $("#txtPassword").val();
  let inputFirstName = $("#txtFirstName").val();
  let inputLastName = $("#txtLastName").val();
  let inputAge = $("#txtAge").val();
  let inputAddress = $("#txtAddress").val();
  let inputPhoneNumber = $("#txtPhoneNumber").val();
  let inputPayment = $("#selPayment").val();
  let inputColor = $("#txtColor").val();

  let newUser = new User(
    inputEmail,
    inputPassword,
    inputFirstName,
    inputLastName,
    inputAge,
    inputAddress,
    inputPhoneNumber,
    inputPayment,
    inputColor
  );
  if (validate(newUser)) {
    displayNotification("Successful registration", "success");
    setTimeout(function () {
      hideNotification();
    }, 2000);
    saveUser(newUser);
    $("input").val("");
  }
}

function init() {
  console.log("init");
}
window.onload = init;
