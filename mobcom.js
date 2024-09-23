function handleSubmit(event) {
    event.preventDefault();
    console.log("Form submitted");
    const studentNumber = document.getElementById("studentNumber").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    // Redirect to the next page with parameters
    window.location.href = `nextPage.html?studentNumber=${encodeURIComponent(studentNumber)}&password=${encodeURIComponent(password)}`;
}

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        studentNumber: params.get('studentNumber'),
        password: params.get('password')
    };
}

// Run this when the window loads
window.onload = function() {
    const { studentNumber } = getQueryParams(); // Get only the student number

    // Display the values on the page
    const output = document.getElementById("output");
    if (studentNumber) {
        output.innerHTML = `Student Number: ${studentNumber}`; // Show only the student number
    } else {
        output.innerHTML = "No student number provided.";
    }
};