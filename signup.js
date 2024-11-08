document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting in the usual way

    // Get the input values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if email and password are provided
    if (email && password) {
        // Create a user object
        const user = {
            email: email,
            password: password
        };

        // Save user data to localStorage
        localStorage.setItem('user', JSON.stringify(user));

        // Redirect to the login page after successful signup
        alert('Signup successful!');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Please fill out both fields.');
    }
});
