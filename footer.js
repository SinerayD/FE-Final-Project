const footer_button=document.getElementById("footer_button")

function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
}

function showSuccessToast() {
    const toastContainer = document.getElementById('toast-container');
    const toastFooter = document.createElement('div');
    toastFooter.className = 'toast show';
    toastFooter.textContent = 'Subscription successful!';
    toastContainer.appendChild(toast);
    setTimeout(function () { 
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove()
        }, 500);
    }, 2000);
}

function showErrorToast() {
    const toastContainer = document.getElementById('toast-container');
    const toastFooter = document.createElement('div');
    toastFooter.className = 'toast show';
    toastFooter.textContent = 'Please enter a valid email address!';
    toastContainer.appendChild(toast);
    setTimeout(function () {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove()
        }, 300);
    }, 2000);
}
document.querySelector('').addEventListener('click', function () {
    const emailInput = document.getElementById('email_input');
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        showSuccessToast();
        emailInput.value = '';
    } else {
        showErrorToast();
    }
});