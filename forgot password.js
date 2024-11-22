function login() {
    const emailInput = document.getElementById("Username");
    const email = emailInput.value.trim();
  
    // Email validation using a simple regex pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email address. Please enter a valid email.");
      return;
    }
  
    // If email is valid, redirect to Forgot Password 2.html
    window.location.href = "Forgot Password 2.html";
  }