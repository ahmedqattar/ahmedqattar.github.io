// Contact form validation
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const subjectError = document.getElementById('subjectError');
const messageError = document.getElementById('messageError');

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error
function showError(input, errorElement, message) {
    input.classList.add('error');
    errorElement.textContent = message;
}

// Show success
function showSuccess(input, errorElement) {
    input.classList.remove('error');
    errorElement.textContent = '';
}

// Form submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    let isValid = true;
    
    // Name validation
    if (nameInput.value.trim() === '') {
        showError(nameInput, nameError, 'Full name is required');
        isValid = false;
    } else if (nameInput.value.trim().length < 2) {
        showError(nameInput, nameError, 'Name must be at least 2 characters');
        isValid = false;
    } else {
        showSuccess(nameInput, nameError);
    }
    
    // Email validation
    if (emailInput.value.trim() === '') {
        showError(emailInput, emailError, 'Email address is required');
        isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        isValid = false;
    } else {
        showSuccess(emailInput, emailError);
    }
    
    // Subject validation
    if (subjectInput.value.trim() === '') {
        showError(subjectInput, subjectError, 'Subject is required');
        isValid = false;
    } else {
        showSuccess(subjectInput, subjectError);
    }
    
    // Message validation
    if (messageInput.value.trim() === '') {
        showError(messageInput, messageError, 'Message cannot be empty');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        showError(messageInput, messageError, 'Message must be at least 10 characters');
        isValid = false;
    } else {
        showSuccess(messageInput, messageError);
    }
    
    // Success!
    if (isValid) {
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.innerHTML = '<i class="fas fa-check-circle"></i> Message Sent!';
        submitBtn.classList.add('success');
        
        form.reset();
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-send"></i> Send Message';
            submitBtn.classList.remove('success');
        }, 3000);
    }
});

// Real-time validation
nameInput.addEventListener('input', function() {
    if (this.value.trim().length >= 2) showSuccess(this, nameError);
});

emailInput.addEventListener('input', function() {
    if (isValidEmail(this.value.trim())) showSuccess(this, emailError);
});

subjectInput.addEventListener('input', function() {
    if (this.value.trim() !== '') showSuccess(this, subjectError);
});

messageInput.addEventListener('input', function() {
    if (this.value.trim().length >= 10) showSuccess(this, messageError);
});