// Lightbox functionality
let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const prevArrow = document.getElementById('prev-arrow');
const nextArrow = document.getElementById('next-arrow');

// Open lightbox when a gallery item is clicked
function openLightbox(imgElement) {
    currentIndex = Array.from(galleryItems).indexOf(imgElement.parentElement);
    showLightbox();
}

// Show lightbox with selected image
function showLightbox() {
    const imgSrc = galleryItems[currentIndex].querySelector('img').src;
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
}

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Navigate to the previous image
prevArrow.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent lightbox click event from closing
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
    showLightbox();
});

// Navigate to the next image
nextArrow.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent lightbox click event from closing
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
    showLightbox();
});

// Update the date and time dynamically
function updateDateTime() {
    const dateTimeElement = document.querySelector('.date-time');
    
    // Get current date and time
    const now = new Date();
    const options = {
        weekday: 'long', // Full weekday name (e.g. Monday)
        year: 'numeric',
        month: 'long', // Full month name (e.g. November)
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true // 12-hour format with AM/PM
    };

    // Format the date and time to match the desired appearance
    const formattedDate = now.toLocaleString('en-US', options);
    
    // Display the date and time in the footer
    dateTimeElement.textContent = formattedDate;
}

// Call updateDateTime every second to keep it updated
setInterval(updateDateTime, 1000);

// Call once to display the initial date and time
updateDateTime();



