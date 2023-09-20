const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    let isValid = true;

    // Remove previous error messages
    const errorMessages = document.getElementsByClassName('error-message');
    while (errorMessages.length > 0) {
        errorMessages[0].parentNode.removeChild(errorMessages[0]);
    }

    // Validate name field
    if (nameInput.value.trim() === '') {
        displayErrorMessage(nameInput, 'Name is required.');
        isValid = false;
    }

    // Validate email field
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        displayErrorMessage(emailInput, 'Invalid email format.');
        isValid = false;
    }

    // Validate message field
    if (messageInput.value.trim() === '') {
        displayErrorMessage(messageInput, 'Message is required.');
        isValid = false;
    }

    if (isValid) {
        // You can perform any action here after successful form validation
        // For example, sending the form data to a server using AJAX
        console.log('Form submitted successfully!');
    }
});

function displayErrorMessage(inputElement, message) {
    const errorElement = document.createElement('span');
    errorElement.textContent = message;
    errorElement.className = 'error-message';
    inputElement.parentNode.appendChild(errorElement);
}
