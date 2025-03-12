function validateLogin() {
    let email = document.getElementById("email").value;
    let userType = document.getElementById("userType").value;
    let errorMessage = document.getElementById("error-message");

    // Validate IIITT email
    if (!email.endsWith("@iiitt.ac.in")) {
        errorMessage.textContent = "Please use your IIITT email (@iiitt.ac.in)";
        return;
    }

    // Redirect based on user type
    if (userType === "student") {
        window.location.href = "../dashboard/index.html";
    } else if (userType === "admin") {
        window.location.href = "../admin/index.html";
    }
}
