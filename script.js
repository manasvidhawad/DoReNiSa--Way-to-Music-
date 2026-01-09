// Get reference to the checkbox and body element
const toggleSwitch = document.getElementById('toggle-theme');
const body = document.body;

// Check localStorage for previously saved theme preference
const currentTheme = localStorage.getItem('theme');

// If a theme is set in localStorage, apply it
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    toggleSwitch.checked = currentTheme === 'dark';
}

// Function to toggle between light and dark themes
function toggleTheme() {
    if (toggleSwitch.checked) {
        body.setAttribute('data-theme', 'dark'); // Switch to dark theme
        localStorage.setItem('theme', 'dark'); // Save preference to localStorage
    } else {
        body.removeAttribute('data-theme'); // Switch to light theme
        localStorage.setItem('theme', 'light'); // Save preference to localStorage
    }
}

// Add event listener to toggle theme on checkbox change
toggleSwitch.addEventListener('change', toggleTheme);
