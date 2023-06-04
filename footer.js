//Footer Email input validation and toast message

function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
    return emailRegex.test(email);
}

function showSuccessToast() {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast show';
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

    const emailInput = document.getElementById('email_input');
    emailInput.value = '';

    setTimeout(function () {
        toast.classList.remove('show');
        toast.style.backgroundColor = 'red';

        setTimeout(() => {
            toast.remove()
        }, 300);
    }, 2000);
}
document.getElementById('footer_button').addEventListener('click', function () {
    const emailInput = document.getElementById('email_input');
    const email = emailInput.value.trim();

    if (validateEmail(email)) {
        showSuccessToast();
        emailInput.value = '';
    } else {
        showErrorToast();
    }
});