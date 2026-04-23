// Hamburger in Mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Dark Mode Toggle
const body = document.body;

// Dark Mode Button Creating
const nav = document.querySelector('nav');
const darkBtn = document.createElement('button');
darkBtn.innerHTML = '🌙';
darkBtn.style.fontSize = '20px';
darkBtn.style.border = 'none';
darkBtn.style.background = 'none';
darkBtn.style.cursor = 'pointer';
nav.appendChild(darkBtn);

// Check LocalStorage For Saved Theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkBtn.innerHTML = '☀️';
}

// Toggle Function
darkBtn.addEventListener ('click', () => {
    body.classList.toggle ('dark-mode');

    if (body.classList.contains ('dark-mode')) {
        localStorage.setItem ('theme', 'dark');
        darkBtn.innerHTML = '☀️';
    }
    else {
        localStorage.setItem ('theme', 'dark');
        darkBtn.innerHTML = '🌙';
    }
});

// Contact Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    if (name === '' || email === '' || message === '') {
        alert ('Fill the all details');
        return;
    }

    if (!email.includes ('@')) {
        alert ('Include "@" in your email');
        return;
    }

    alert ('Message Sent!!')
    form.reset();
});