// Get the canvas element
var canvas = document.getElementById('galaxyCanvas');
var ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Star array
var stars = [];
var numStars = 1000;

// Create stars
for (var i = 0; i < numStars; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5
    });
}

// Function to draw stars
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw stars
    for (var i = 0; i < stars.length; i++) {
        var star = stars[i];
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();

        // Move star
        star.x -= star.speed;

        // If star is off screen, reset it
        if (star.x < 0) {
            star.x = canvas.width;
            star.y = Math.random() * canvas.height;
        }
    }
}

// Function to draw galactic core
function drawGalacticCore() {
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;

    var gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, canvas.height / 2);
    gradient.addColorStop(0, 'rgba(255, 255, 200, 0.8)');
    gradient.addColorStop(0.3, 'rgba(255, 220, 100, 0.3)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.beginPath();
    ctx.arc(centerX, centerY, canvas.height / 2, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
}

// Animation function
function animate() {
    drawStars();
    drawGalacticCore();
    requestAnimationFrame(animate);
}

// Start the animation
animate();

// Resize canvas when window is resized
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})