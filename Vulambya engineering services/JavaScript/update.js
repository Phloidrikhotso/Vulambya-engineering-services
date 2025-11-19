// Hamburger Menu Toggle for mobile navigation
document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('.nav-links').classList.toggle('show');
});

// Scroll Animation: Show elements when they are in the viewport
const elements = document.querySelectorAll('.news-item, main h1, main p, .news-img');

function checkVisibility() {
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('visible');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', checkVisibility);

// Call immediately to handle elements already in view
checkVisibility();

// Read More functionality to expand and show the full article
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
        const article = this.closest('.full-article');
        article.classList.toggle('expanded');
    });
});

// Display the current date and time in the footer
window.onload = function() {
    let footerDateTime = document.querySelector('.date-time');
    let currentDate = new Date();
    let formattedDate = currentDate.toLocaleString(); // Localized format
    footerDateTime.textContent = formattedDate;
};

