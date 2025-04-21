// Event Listener: Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Form Validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const output = document.getElementById('output');

    if (name === "" || email === "") {
        alert("Please fill out all fields.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Display data
    output.innerHTML = `<h3>Submitted Data:</h3><p>Name: ${name}</p><p>Email: ${email}</p>`;
    output.classList.remove('hidden');
});

// Helper Function for Email Validation
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Interactive Element: Toggle Dark Mode
document.getElementById('toggleTheme').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
