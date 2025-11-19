// Initialize EmailJS with your user ID
emailjs.init("I_X60cSAHL-ycMx7Y");  // Replace with your actual EmailJS user ID

// Toggle the hamburger menu for mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open'); // Optional: adds rotation effect to hamburger icon
});

// Scroll reveal for elements with class 'reveal'
window.addEventListener("scroll", function () {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
});

// Dynamically update footer year
document.addEventListener("DOMContentLoaded", function() {
    const dateSpan = document.querySelector('.date-time');
    const currentYear = new Date().getFullYear();
    dateSpan.textContent = currentYear;
});

// Form submission using EmailJS
document.getElementById('enquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting in the default way

    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Send the form data via EmailJS
    emailjs.send("service_2rdofc9", "template_g8rcczd", {
        from_name: name,
        from_email: email,
        phone_number: phone,
        message: message
    }).then(response => {
        alert("Message sent successfully!");
        event.target.reset(); // Reset the form after successful submission
    }).catch(error => {
        console.error("EmailJS Error:", error);  // Log the error for better debugging
        alert("Failed to send message. Please try again later.");
    });
});








