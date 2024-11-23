// Function to load user info from local storage
function loadUserInfo() {

    const currentUser = localStorage.getItem('currentUser');
    const loggedUser = JSON.parse(localStorage.getItem(currentUser))

    //const username = localStorage.getItem('currentUser'); // Get username from local storage
    //;const email = localStorage.getItem('email'); // Get email from local storage

    // Update the HTML elements with the retrieved values
    document.getElementById('username').textContent = currentUser ? loggedUser.user : 'Guest'; // Default to 'Guest' if not found
    document.getElementById('email').textContent = currentUser ? loggedUser.email : 'No email provided'; // Default message if not found
}

// Function to log out the user
function logout(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    localStorage.removeItem('currentUser'); // Remove username from local storage
    //localStorage.removeItem('email'); // Remove email from local storage

    // Redirect to the login page
    window.location.href = 'Log-in.html'; // Change this to your desired redirect page
}

// Call the function to load user info on page load
window.onload = loadUserInfo;

// Attach logout function to the logout link
document.getElementById('logoutLink').addEventListener('click', logout);