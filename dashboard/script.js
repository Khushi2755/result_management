// Function to validate login
function validateLogin() {
    const username = document.getElementById('username').value.trim();

    // Admin condition - Redirect to admin dashboard
    if (username.toLowerCase() === 'admin') {
        window.location.href = 'admin_dashboard.html'; // Change to your desired admin page
        return;
    }

    // Email condition for @iiitt.ac.in domain - Redirect to student dashboard
    if (username.endsWith('@iiitt.ac.in')) {
        window.location.href = 'student_dashboard.html'; // Change to your desired student page
        return;
    }

    // Show alert for invalid entries
    alert("Invalid email or username! Only 'admin' or emails ending with '@iiitt.ac.in' are allowed.");
}

// Enable 'Enter' key functionality
document.getElementById('username').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        validateLogin();
    }
});

document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        validateLogin();
    }
});
function validateLogin() {
    const username = document.getElementById('username').value.trim();

    if (username.toLowerCase() === 'admin') {
        window.location.href = 'admin_dashboard.html';
        return;
    }

    if (username.endsWith('@iiitt.ac.in')) {
        window.location.href = 'student_dashboard.html';
        return;
    }

    alert("Invalid email or username! Only 'admin' or emails ending with '@iiitt.ac.in' are allowed.");
}
