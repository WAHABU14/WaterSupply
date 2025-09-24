// Responsive navigation menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Smooth scrolling effect
const links = document.querySelectorAll('a[href*="#"]');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Contact form validation
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('Please fill out all fields');
        e.preventDefault();
    } else if (!validateEmail(emailInput.value)) {
        alert('Invalid email address');
        e.preventDefault();
    }
});

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}