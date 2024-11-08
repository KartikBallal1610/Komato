document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Fetch the existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists and the password matches
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // User found, login successful
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "index.html";  // Redirect to main page
    } else {
        // User not found, display error message
        alert("Invalid credentials. Please try again or sign up.");
    }
});
