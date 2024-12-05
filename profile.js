document.addEventListener("DOMContentLoaded", () => {
    const registrationForm = document.getElementById("registrationForm");
    const profileSection = document.getElementById("profileSection");
    const profileName = document.getElementById("profileName");
    const profileEmail = document.getElementById("profileEmail");
    const logoutLink = document.getElementById("logoutLink");

    // Check if user data exists in localStorage
    const userData = JSON.parse(localStorage.getItem("userProfile"));
    if (userData) {
        displayProfile(userData.name, userData.email);
    }

    // Handle form submission
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name && email) {
            // Save user data to localStorage
            const userProfile = { name, email };
            localStorage.setItem("userProfile", JSON.stringify(userProfile));

            // Display profile
            displayProfile(name, email);
        }
    });

    // Handle logout
    logoutLink.addEventListener("click", (event) => {
        event.preventDefault();

        // Clear user data from localStorage
        localStorage.removeItem("userProfile");

        // Reset the form and UI
        profileSection.style.display = "none";
        registrationForm.style.display = "block";
    });

    // Function to display profile data
    function displayProfile(name, email) {
        profileName.innerHTML = `Name: ${name}`;
        profileEmail.innerHTML = `Email: ${email}`;
        registrationForm.style.display = "none"; // Hide form
        profileSection.style.display = "block"; // Show profile
    }
});