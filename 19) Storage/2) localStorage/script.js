// Get references to the toggle and label
const toggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');

// Function to set the theme
function setTheme(isDark) {
  if (isDark) {
    document.documentElement.setAttribute("data-theme","dark")
    themeLabel.textContent = 'Dark Mode';
} else {
    document.documentElement.setAttribute("data-theme","light")
    themeLabel.textContent = 'Light Mode';
  }
}

// Initialize theme based on localStorage or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme === 'dark');
toggle.checked = savedTheme === 'dark';

// Add event listener to the toggle switch
toggle.addEventListener('change', () => {
  const isDark = toggle.checked;
  setTheme(isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

//! local storage sets data in key value pairs 
// it has storage of 5-10MB 
// setItem: sets key value pairs in localStorage
// getItem: gets key value pairs in localStorage
// it sets data in the form of strings