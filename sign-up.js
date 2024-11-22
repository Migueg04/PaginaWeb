



function login() {
    const username = document.getElementById('Username').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('Password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    // Check for empty fields
    if (!username || !email || !phoneNumber || !password || !confirmPassword) {
        alert("Please fill out all fields.");
        return;
    }

    // Validate email
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate phone number
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid Colombian phone number (10 digits).");
        return;
    }

    // Validate password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Store user data in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('phoneNumber', phoneNumber);
    localStorage.setItem('password', password); // Note: Storing passwords in local storage is not secure!

    // Redirect to Catalogo.html
    window.location.href = "./Catalogo.html";
}