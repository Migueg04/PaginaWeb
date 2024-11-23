document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            const storedEmail = localStorage.getItem(email);
            let storedUser = JSON.parse(storedEmail);
            console.log(storedUser)
            console.log(`email: ${email}, password: ${password}`)
            //const storedPassword = localStorage.getItem('password');

            if (!email || !password) {
                alert('Please complete the form');
                return;
            }

            if (storedUser.user === email && storedUser.password === password) {
                alert('Login successful');
                localStorage.setItem("currentUser", storedUser.user)
                window.location.href = 'Catalogo.html'; // Redirect on successful login
            } else {
                alert('Email or password incorrect.');
            }
        });
    } else {
        console.error('Login form not found');
    }
});