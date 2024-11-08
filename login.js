document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevents the form from submitting the default way

    // Get the input values from the form
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve the stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Validate the login
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert('Login successful!');
        window.location.href = 'index.html';  // Redirect to the main page after successful login
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
