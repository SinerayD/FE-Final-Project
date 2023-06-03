//Subscribe button toast message code
const footer_button = document.getElementById("footer_button");

function validateEmail(email) {
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

function showSuccessToast() {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast_success';
  toast.className = 'toast show';
  toast.textContent = 'Subscription successful!';
  toastContainer.appendChild(toast);
  setTimeout(function () {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 500);
  }, 2000);
}

footer_button.addEventListener('click', function () {
  const emailInput = document.getElementById('email_input');
  const email = emailInput.value.trim();

  if (validateEmail(email)) {
    showSuccessToast();
    emailInput.value = '';
  } else {
    showErrorToast();
  }
});

function showErrorToast() {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast error';
  toast.className = 'toast show';
  toast.textContent = 'Please enter a valid email address!';
  toastContainer.appendChild(toast);
  setTimeout(function () {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2000);
}


//Inputs Validation code
const createAccountButton = document.querySelector(".createBtn");

createAccountButton.addEventListener("click", createAccount);

function createAccount() {
  if (areAllInputsValid() && !isAnyInputEmpty()) {
    // Perform account creation logic here
    showToast("Account created successfully");
  } else {
    showToast("Please fill in all fields correctly");
  }
}

function areAllInputsValid() {
  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  return isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
}

function isAnyInputEmpty() {
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("emailAdress");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");

  return (
    usernameInput.value.trim() === "" ||
    emailInput.value.trim() === "" ||
    passwordInput.value.trim() === "" ||
    confirmPasswordInput.value.trim() === ""
  );
}

// Rest of the code remains the same

const usernameInput = document.getElementById("username");
const usernameErrorMessage = document.getElementById("username_error");

usernameInput.addEventListener("input", validateUsername);

function validateUsername() {
  if (!usernameInput.value.match(/^[A-Za-z0-9]{6,20}$/)) {
    usernameErrorMessage.innerHTML = "Please enter a valid username";
    usernameErrorMessage.classList.remove("valid");
    usernameErrorMessage.classList.add("invalid");
    usernameErrorMessage.style.color = "red";
    return false;
  } else {
    usernameErrorMessage.innerHTML = "Valid username";
    usernameErrorMessage.classList.remove("invalid");
    usernameErrorMessage.classList.add("valid");
    usernameErrorMessage.style.color = "green";
    return true;
  }
}

const emailInput = document.getElementById("emailAdress");
const emailErrorMessage = document.getElementById("email_error");

emailInput.addEventListener("input", validateEmail);

function validateEmail() {
  if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{3,6}$/)) {
    emailErrorMessage.innerHTML = "Please enter a valid email";
    emailErrorMessage.classList.remove("valid");
    emailErrorMessage.classList.add("invalid");
    emailErrorMessage.style.color = "red";
    return false;
  } else {
    emailErrorMessage.innerHTML = "Valid email";
    emailErrorMessage.classList.remove("invalid");
    emailErrorMessage.classList.add("valid");
    emailErrorMessage.style.color = "green";
    return true;
  }
}
const passwordInput = document.getElementById("password");
const passwordErrorMessage = document.getElementById("password_error");

passwordInput.addEventListener("input", validatePassword);

function validatePassword() {
  if (!passwordInput.value.match(/^.{8,}$/)) {
    passwordErrorMessage.innerHTML = "Please enter a password with at least 8 characters";
    passwordErrorMessage.classList.remove("valid");
    passwordErrorMessage.classList.add("invalid");
    return false;
  } else {
    passwordErrorMessage.innerHTML = "Valid password";
    passwordErrorMessage.classList.remove("invalid");
    passwordErrorMessage.classList.add("valid");
    return true;
  }
}

const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordErrorMessage = document.getElementById("confirmPassword_error");

confirmPasswordInput.addEventListener("input", validateConfirmPassword);

function validateConfirmPassword() {
  if (confirmPasswordInput.value === "") {
    confirmPasswordErrorMessage.innerHTML = "Please enter a confirm password";
    confirmPasswordErrorMessage.classList.remove("valid");
    confirmPasswordErrorMessage.classList.add("invalid");
    return false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordErrorMessage.innerHTML = "Passwords do not match";
    confirmPasswordErrorMessage.classList.remove("valid");
    confirmPasswordErrorMessage.classList.add("invalid");
    return false;
  } else {
    confirmPasswordErrorMessage.innerHTML = "Passwords match";
    confirmPasswordErrorMessage.classList.remove("invalid");
    confirmPasswordErrorMessage.classList.add("valid");
    return true;
  }
}

//Create Account toast message
const createAccountBtn = document.querySelector(".createBtn");

createAccountBtn.addEventListener("click", createAccount);

function createAccount() {
 
  showToast("Account created successfully");
}

function showToast(message) {
  const toastContainer = document.createElement("div");
  toastContainer.classList.add("toast-container");

  const toastMessage = document.createElement("div");
  toastMessage.classList.add("toast-message");
  toastMessage.textContent = message;

  toastContainer.appendChild(toastMessage);
  document.body.appendChild(toastContainer);


  setTimeout(function () {
    document.body.removeChild(toastContainer);
  }, 2000);
}