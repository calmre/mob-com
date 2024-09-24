document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the values from the input fields
    const studentId = document.getElementById("student-number").value;
    const password = document.getElementById("password").value;

    // Retrieve user data from local storage
    const storedUser = localStorage.getItem('user_' + studentId);

    if (storedUser) {
        // Parse the stored user data
        const user = JSON.parse(storedUser);

        // Check if the password matches
        if (user.password === password) {
            // Correct username and password
            alert("Welcome, " + user.firstName + "!");
        } else {
            // Incorrect password
            alert("Incorrect password. Please try again.");
        }
    } else {
        // Username not found
        alert("Student ID does not exist. Please register first.");
    }

    // Clear the form fields
    this.reset();
});