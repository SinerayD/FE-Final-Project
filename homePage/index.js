//Email input validation and toast message
function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

function showSuccessToast() {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast show success';
    toast.innerHTML = '<i class="fas fa-check-circle"></i> Subscription successful!'; 
    toastContainer.appendChild(toast);
  
    setTimeout(function () {
      toast.classList.remove('show');
      toast.style.backgroundColor = 'green'; 

      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2000);
  }
  

function showErrorToast() {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast show error'; 
    toast.innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> Please enter a valid email address!';
    toastContainer.appendChild(toast);
    
    setTimeout(function () {
      toast.classList.remove('show');
      toast.style.backgroundColor = 'red'; 
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 2000);
  }

document.querySelector('.subscribe_btn').addEventListener('click', function () {
    const emailInput = document.getElementById('email_input');
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        showSuccessToast();
        emailInput.value = '';
    } else {
        showErrorToast();
    }
});

//Artist Page navigation code
const artistCards = document.querySelectorAll('.artist_card');

artistCards.forEach(element => {
    element.addEventListener("click", () => {
        window.location.href ="../artistPage/index.html"
    })
    
});

//Sign Up button navigation page code
const signUpButton = document.querySelector('.button1.enroll_icon');

signUpButton.addEventListener('click', function () {
    window.location.href = "../createAccount/index.html";
});
