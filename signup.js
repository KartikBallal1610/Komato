document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Sign up successful! Please log in.");
    window.location.href = "login.html";  // Redirect to login page
});
