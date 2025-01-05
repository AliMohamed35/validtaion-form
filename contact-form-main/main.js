let form = document.getElementById('myForm');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let textAreaInput = document.getElementById('message');
let firstNameError = document.getElementById('first-name-error');
let lastNameError = document.getElementById('last-name-error');
let messageError = document.getElementById('message-error');

form.addEventListener('submit', (e) => {
    // First Name
    let hasError = false;
    if (firstName.value.trim().length < 3) {
        firstNameError.textContent = 'This field is required';
        hasError = true;
    } else {
        firstNameError.textContent = '';
    }
    if (hasError) {
        e.preventDefault();
    }

    // Last Name
    if (lastName.value.trim().length < 3) {
        lastNameError.textContent = 'This field is required';
    }

    //Text area
    if (textAreaInput.value == 0) {
        messageError.textContent = "This Field is required";
    }
    //Email
    if (emailInput.value == 0) {
        emailError.textContent = "This field is required";
    }
});

// Email
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('input', () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailError.textContent = '';
    }
});