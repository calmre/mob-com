document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get the values from the input fields
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const studentId = document.getElementById("student-id").value;
    const password = document.getElementById("password").value;

    // Create an object to store the user data
    const user = {
        firstName: firstName,
        lastName: lastName,
        studentId: studentId,
        password: password
    };

    // Store the object in local storage
    localStorage.setItem('user_' + studentId, JSON.stringify(user));

    // Clear the form fields after submission
    this.reset();

    // Notify the user
    alert("Registration successful! You can now login.");
});

