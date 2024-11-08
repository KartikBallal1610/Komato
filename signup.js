document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Fetch the existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user already exists
    if (users.find(user => user.email === email)) {
        alert("User already exists. Please login.");
        window.location.href = "login.html";  // Redirect to login page
    } else {
        // Create new user and save to localStorage
        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Store the logged-in user
        localStorage.setItem("user", JSON.stringify(newUser));
        
        alert("Sign up successful! Redirecting to homepage...");
        window.location.href = "index.html";  // Redirect to main page
    }
});
