function animateBouncingBalls() {
    // Get the room element
    const room = document.getElementById('room');
    
    // Get all the ball elements
    const balls = document.getElementsByClassName('ball');
    
    // Set initial positions and velocities for each ball
    const ballData = [
        { x: 100, y: 100, vx: 2, vy: 1 },
        { x: 200, y: 200, vx: -1, vy: -2 },
        { x: 300, y: 300, vx: 1, vy: -1 }
    ];
    
    // Animation loop
    function animate() {
        // Move each ball and check for collisions with room boundaries
        for (let i = 0; i < balls.length; i++) {
            const ball = balls[i];
            const data = ballData[i];
            
            // Update ball position
            data.x += data.vx;
            data.y += data.vy;
            
            // Check for collision with room boundaries
            if (data.x <= 0 || data.x >= room.offsetWidth - ball.offsetWidth) {
                data.vx *= -1; // Reverse horizontal velocity
            }
            if (data.y <= 0 || data.y >= room.offsetHeight - ball.offsetHeight) {
                data.vy *= -1; // Reverse vertical velocity
            }
            
            // Apply updated position to ball element
            ball.style.left = data.x + 'px';
            ball.style.top = data.y + 'px';
        }
        
        // Request next animation frame
        requestAnimationFrame(animate);
    }
    
    // Start the animation
    animate();
}

// Add HTML structure and CSS styles to the document
document.body.innerHTML = htmlStructure;
const styleElement = document.createElement('style');
styleElement.innerHTML = cssStyles;
document.head.appendChild(styleElement);

// Call the function to animate the bouncing balls
animateBouncingBalls();
