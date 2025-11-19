// Toggle Hamburger Menu for mobile navigation
document.querySelector('.hamburger').addEventListener('click', function() {
    // Toggle the 'open' class to animate the hamburger and show the nav links
    this.classList.toggle('open');
    document.querySelector('.nav-links').classList.toggle('show');
});

// Scroll Animation: Show elements when they are in the viewport
const elements = document.querySelectorAll("main h1, main h2, main p, main img, main ul");

function checkVisibility() {
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add("visible");
        }
    });
}

// Listen for scroll events
window.addEventListener("scroll", checkVisibility);

// Call the function on page load to handle elements already in view
checkVisibility();

// Display the current date and time in the footer
window.onload = function() {
    let footerDateTime = document.querySelector('.date-time');
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleString(); // Localized format
    footerDateTime.textContent = formattedDate;
};

