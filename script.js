// Change the text dynamically after page loads
document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.getElementById("welcome-text");
    let messages = ["Welcome to Jelary!", "Explore Our Products", "Join Our Community"];
    let index = 0;

    setInterval(() => {
        welcomeText.textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 3000);
});
