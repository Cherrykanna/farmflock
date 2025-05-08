const btnPopup = document.querySelector('.btnLogin-popup');
const cover_box = document.querySelector('.cover_box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon_close');

// Show the login form and hide the register form initially
function showLoginForm() {
    cover_box.classList.remove('active'); // Ensure register form is hidden
    cover_box.classList.add('active-popup'); // Show the cover_box
}

// Show the register form and hide the login form
function showRegisterForm() {
    cover_box.classList.add('active'); // Show the register form
}

// Hide the cover_box
function hideCoverBox() {
    cover_box.classList.remove('active-popup'); // Hide the cover_box
    cover_box.classList.remove('active'); // Reset the register form state
}

// Event listeners
btnPopup.addEventListener('click', showLoginForm); // Show login form on button click
registerLink.addEventListener('click', showRegisterForm); // Switch to register form
loginLink.addEventListener('click', showLoginForm); // Switch back to login form
iconClose.addEventListener('click', hideCoverBox); // Close the cover_box