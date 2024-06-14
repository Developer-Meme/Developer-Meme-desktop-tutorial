// script.js

// Example: Display a welcome message when the page loads
document.addEventListener('DOMContentLoaded', function () {
    const welcomeMessage = document.querySelector('#welcome-message');
    welcomeMessage.textContent = 'Welcome to My Portfolio!';
});

// Example: Toggle dark mode
const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Add more JavaScript functionality as needed