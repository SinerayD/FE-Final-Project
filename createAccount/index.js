const createAccountButton = document.querySelector(".createBtn");

createAccountButton.addEventListener("click", createAccount);

function createAccount() {
  console.log("allInputsValid", allInputsValid());
  console.log("!isAnyInputEmpty", !isAnyInputEmpty());

  if (allInputsValid() && !isAnyInputEmpty()) {
    showToast("Account created successfully", "success");
  } else {
    showToast("Please fill in all fields correctly", "error");
  }
}

function allInputsValid() {
  const isUsernameValid = validateUsername();

  emailInput.addEventListener("input", checkEmail);

  function checkEmail() {
    const emailInput = document.getElementById("emailAdress");
    const emailErrorMessage = document.getElementById("email_error");

    if (
      emailInput.value.match(
        /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/
      )
    ) {
      emailErrorMessage.innerHTML = "Valid email";
      emailErrorMessage.classList.remove("invalid");
      emailErrorMessage.classList.add("valid");
      console.log("true email");
      return true;
    } else {
      emailErrorMessage.innerHTML = "Please enter a valid email";
      emailErrorMessage.classList.remove("valid");
      emailErrorMessage.classList.add("invalid");
      console.log("false email");
      return false;
    }
  }

  const isEmailValid = checkEmail();

  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  console.log("isUsernameValid", isUsernameValid);
  console.log("isEmailValid", isEmailValid);
  console.log("isPasswordValid", isPasswordValid);
  console.log("isConfirmPasswordValid", isConfirmPasswordValid);

  return (
    isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid
  );
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

const usernameInput = document.getElementById("username");
const usernameErrorMessage = document.getElementById("username_error");

usernameInput.addEventListener("input", validateUsername);

function validateUsername() {
  if (!usernameInput.value.match(/^[A-Za-z0-9]{6,20}$/)) {
    usernameErrorMessage.innerHTML = "Please enter a valid username";
    usernameErrorMessage.classList.remove("valid");
    usernameErrorMessage.classList.add("invalid");
    return false;
  } else {
    usernameErrorMessage.innerHTML = "Valid username";
    usernameErrorMessage.classList.remove("invalid");
    usernameErrorMessage.classList.add("valid");
    return true;
  }
}

const emailInput = document.getElementById("emailAdress");
const emailErrorMessage = document.getElementById("email_error");

emailInput.addEventListener("input", validateEmail);

function checkEmail() {
  const emailInput = document.getElementById("emailAdress");
  const emailErrorMessage = document.getElementById("email_error");

  if (
    emailInput.value.match(
      /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/
    )
  ) {
    emailErrorMessage.innerHTML = "Valid email";
    emailErrorMessage.classList.remove("invalid");
    emailErrorMessage.classList.add("valid");
    console.log("true email");
    return true;
  } else {
    emailErrorMessage.innerHTML = "Please enter a valid email";
    emailErrorMessage.classList.remove("valid");
    emailErrorMessage.classList.add("invalid");
    console.log("false email");
    return false;
  }
}

function validateEmail() {
  
  if (
    emailInput.value.match(
      /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/
    )
  ) {
    emailErrorMessage.innerHTML = "Valid email";
    emailErrorMessage.classList.remove("invalid");
    emailErrorMessage.classList.add("valid");
    console.log("true email");
    return true;
  } else {
    emailErrorMessage.innerHTML = "Please enter a valid email";
    emailErrorMessage.classList.remove("valid");
    emailErrorMessage.classList.add("invalid");
    console.log("false email");
    return false;
  }
}

const passwordInput = document.getElementById("password");
const passwordErrorMessage = document.getElementById("password_error");

passwordInput.addEventListener("input", validatePassword);

function validatePassword() {
  if (!passwordInput.value.match(/^.{8,}$/)) {
    passwordErrorMessage.innerHTML = "Enter a password at least 8 characters";
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
const confirmPasswordErrorMessage = document.getElementById(
  "confirmPassword_error"
);

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

function showToast(message, messageType) {
  const toastContainer = document.createElement("div");
  toastContainer.classList.add("toast-container");

  const toastMessage = document.createElement("div");
  toastMessage.classList.add("toast-message");

  toastContainer.appendChild(toastMessage);
  document.body.appendChild(toastContainer);
  if (messageType === "success") {
    toastMessage.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    toastContainer.classList.add("success");
  } else if (messageType === "error") {
    toastMessage.innerHTML = `<i class="fas fa-times-circle"></i> ${message}`;
    toastContainer.classList.add("error");
  }

  setTimeout(function () {
    toastContainer.classList.add("show");
    setTimeout(function () {
      toastContainer.classList.remove("show");
      setTimeout(function () {
        toastContainer.remove();
      }, 300);
    }, 2000);
  }, 100);
}