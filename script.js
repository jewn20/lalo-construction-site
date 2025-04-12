// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    const toggle = document.querySelector('.menu-toggle');
    toggle.textContent = toggle.textContent === '☰' ? '✕' : '☰';
});

// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form validation
const form = document.querySelector('.contact-form form');
if (form) {
    form.addEventListener('submit', function(e) {
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const phoneRegex = /^[0-9]{10,15}$/;
        
        if (phone && !phoneRegex.test(phone)) {
            e.preventDefault();
            alert('Please enter a valid phone number (10-15 digits).');
            return;
        }
        alert('Form submitted successfully! We will get back to you soon.');
    });
}