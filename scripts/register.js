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
    $("#txtEmail").addClass("error");
    console.log("Please enter an email");
  }
  if (aUser.password === "") {
    valid = false;
    $("#txtPassword").addClass("error");
    console.log("Please enter a password");
  }
  if (aUser.firstName === "") {
    valid = false;
    $("#txtFirstName").addClass("error");
    console.log("Please enter a first name");
  }
  if (aUser.lastName === "") {
    valid = false;
    $("#txtLastName").addClass("error");
    console.log("Please enter a last name");
  }
  if (aUser.payment === "") {
    valid = false;
    console.log("Please enter a payment method");
  }
  return valid;
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
    console.log(newUser);
    $("input").val("");
  }
}

function init() {
  console.log("init");
}
window.onload = init;
