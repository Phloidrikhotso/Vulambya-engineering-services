// Toggle the hamburger menu
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Scroll reveal functionality
document.addEventListener("DOMContentLoaded", function() {
    const reveals = document.querySelectorAll(".reveal");

    // Check if an element is in the viewport
    function checkVisibility() {
        reveals.forEach((reveal) => {
            const windowHeight = window.innerHeight;
            const revealTop = reveal.getBoundingClientRect().top;
            
            if (revealTop < windowHeight - 150) {
                reveal.classList.add("visible");
            }
        });
    }

    // Trigger the checkVisibility function on scroll
    window.addEventListener("scroll", checkVisibility);

    // Initial check in case elements are already visible when the page loads
    checkVisibility();
});

// Update the date and time dynamically
function updateDateTime() {
    const dateTimeElement = document.querySelector('.date-time');
    
    // Get current date and time
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    // Format the date and time
    const formattedDate = now.toLocaleString('en-US', options);
    
    // Display the date and time in the footer
    dateTimeElement.textContent = formattedDate;
}

// Call updateDateTime every second to keep it updated
setInterval(updateDateTime, 1000);

// Call once to display the initial date and time
updateDateTime();

