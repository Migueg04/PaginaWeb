document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            const storedEmail = localStorage.getItem('email');
            const storedPassword = localStorage.getItem('password');

            if (!email || !password) {
                alert('Please complete the form');
                return;
            }

            if (storedEmail === email && storedPassword === password) {
                alert('Login successful');
                window.location.href = 'cuenta.html'; // Redirect on successful login
            } else {
                alert('Email or password incorrect.');
            }
        });
    } else {
        console.error('Login form not found');
    }
});