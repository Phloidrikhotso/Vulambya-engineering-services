// ================= HAMBURGER MENU =================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show'); // Toggles the 'show' class to display/hide the nav menu
    });
}

// ================= FOOTER DATE/TIME =================
document.addEventListener('DOMContentLoaded', () => {
    // Update the current year dynamically in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();  // Sets the current year
    }

    // Update the date and time in the footer every second
    const dateTimeElement = document.querySelector('.date-time');
    if (dateTimeElement) {
        const updateDateTime = () => {
            const now = new Date();
            dateTimeElement.textContent = now.toLocaleString();  // Display full date and time
        };
        updateDateTime();  // Set initial value
        setInterval(updateDateTime, 1000);  // Update every second
    }
});




