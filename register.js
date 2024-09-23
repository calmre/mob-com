
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the input fields
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;

    // Create an object to store
    const user = {
        firstName: firstName,
        lastName: lastName
    };

    // Store the object in local storage
    localStorage.setItem('user', JSON.stringify(user));

    // Optional: Clear the form fields after submission
    this.reset();

    // Optional: Notify the user
    alert("User information saved!");
});