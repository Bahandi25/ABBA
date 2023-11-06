function registerUser() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
    return;
  } else {
    document.getElementById("confirmPasswordError").innerText = "";
  }

  document.getElementById("registrationMessage").innerText = "User registered successfully!";
}

function checkValidity() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  var registerBtn = document.getElementById("registerBtn");

  var emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
  var isValidEmail = emailRegex.test(email);

  var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  var isValidPassword = passwordRegex.test(password);

  if (!isValidEmail) {
    document.getElementById("emailError").innerText = "Invalid email format";
  } else {
    document.getElementById("emailError").innerText = "";
  }

  if (!isValidPassword) {
    document.getElementById("passwordError").innerText = "Password must contain at least 8 characters and at least 1 number";
  } else {
    document.getElementById("passwordError").innerText = "";
  }

  if (username && isValidEmail && isValidPassword && password === confirmPassword) {
    registerBtn.disabled = false;
  } else {
    registerBtn.disabled = true;
  }
}

document.getElementById("username").addEventListener("input", checkValidity);
document.getElementById("email").addEventListener("input", checkValidity);
document.getElementById("password").addEventListener("input", checkValidity);
document.getElementById("confirmPassword").addEventListener("input", checkValidity);
