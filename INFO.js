// Function to save user information to local storage
function saveUserInfo() { // Corrected function name by removing space
    const username = document.getElementById('Username').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;

    // Store the values in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('password', password); // Note: Storing passwords in plain text is not recommended for security reasons.
}

// Function to populate the form fields with stored user information
function populateFormFields() {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPhoneNumber = localStorage.getItem('phoneNumber');
    const storedPassword = localStorage.getItem('password');

    // Populate the input fields with the retrieved data
    if (storedUsername) {
        document.getElementById('Username').value = storedUsername;
    }
    if (storedEmail) {
        document.getElementById('email').value = storedEmail;
    }
    if (storedPhoneNumber) {
        document.getElementById('phoneNumber').value = storedPhoneNumber;
    }
    if (storedPassword) {
        document.getElementById('password').value = storedPassword;
    }
}

// Call the populate function when the page loads
window.onload = function() {
    populateFormFields();
};

// Example of how to call saveUser Info when a user submits the form
// You can attach this to a button click or form submit event
document.querySelector('.button').addEventListener('click', function() {
    saveUserInfo(); // Corrected function name
    // Optionally redirect or show a success message
});