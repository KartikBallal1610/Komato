document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";  // Redirect to the main menu page
    } else {
        alert("Incorrect username or password");
    }
});
