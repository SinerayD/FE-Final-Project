function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

function showSuccessToast() {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast show success'; // Add the "success" class
    toast.innerHTML = '<i class="fas fa-check-circle"></i> Subscription successful!'; // Add success icon
    toastContainer.appendChild(toast);
  
    setTimeout(function () {
      toast.classList.remove('show');
      toast.style.backgroundColor = 'green'; // Set the background color to green
      setTimeout(() => {
        toast.remove();
      }, 500);
    }, 2000);
  }
  

function showErrorToast() {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast show error'; // Add the "error" class
    toast.textContent = 'Please enter a valid email address!';
    toastContainer.appendChild(toast);
    
    setTimeout(function () {
      toast.classList.remove('show');
      toast.style.backgroundColor = 'red'; // Set the background color to red
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

const artistCards = document.querySelectorAll('.artist_card');

artistCards.forEach(element => {
    element.addEventListener("click", () => {
        window.location.href ="../artistPage/index.html"
    })
    
});


