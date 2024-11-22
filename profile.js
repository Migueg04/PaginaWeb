
    // Function to load user info from local storage
    function loadUserInfo() {
        const username = localStorage.getItem('username'); // Get username from local storage
        const email = localStorage.getItem('email'); // Get email from local storage

        // Update the HTML elements with the retrieved values
        document.getElementById('username').textContent = username ? username : 'Guest'; // Default to 'Guest' if not found
        document.getElementById('email').textContent = email ? email : 'No email provided'; // Default message if not found
    }

    // Function to log out the user
    function logout() {
        localStorage.removeItem('username'); // Remove username from local storage
        localStorage.removeItem('email'); // Remove email from local storage

        // Optionally redirect to a login page or home page
        window.location.href = './Log-in.html'; // Change this to your desired redirect page
    }

    // Call the function to load user info on page load
    window.onload = loadUserInfo;

