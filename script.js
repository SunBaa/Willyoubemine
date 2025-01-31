// Function to navigate between pages
function nextPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    document.getElementById(`page${pageNumber}`).classList.add('active');

    // Play sound for positive responses
    if (pageNumber === 3 || pageNumber === 6 || pageNumber === 9) {
        document.getElementById('yesSound').play();
        startConfetti(); // Start confetti for positive responses
    }
}

// Function to handle "deny" responses
function deny(buttonId) {
    const denyButton = document.getElementById(`denyButton${buttonId}`);
    const denyMessages = [
        "Are you sure? 😢",
        "Please say yes! 🥺",
        "I'll keep asking! 😅",
        "You can't escape! 😏",
        "Just click yes already! 😘"
    ];

    // Change button text to a random deny message
    const randomMessage = denyMessages[Math.floor(Math.random() * denyMessages.length)];
    denyButton.textContent = randomMessage;

    // Play deny sound
    document.getElementById('denySound').play();

    // Move the button randomly
    denyButton.style.position = 'absolute';
    denyButton.style.left = `${Math.random() * 80}%`;
    denyButton.style.top = `${Math.random() * 80}%`;
}

// Function to preview uploaded images
function previewImage(event, imageId) {
    const reader = new FileReader();
    const preview = document.getElementById(`preview${imageId}`);
    reader.onload = function () {
        preview.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

// Confetti Effect
function startConfetti() {
    const confettiSettings = { target: 'confetti', max: 150 };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    // Stop confetti after 5 seconds
    setTimeout(() => {
        confetti.clear();
    }, 5000);
}

// Initialize confetti library
const confettiScript = document.createElement('script');
confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.4.0/dist/confetti.browser.min.js';
document.head.appendChild(confettiScript);