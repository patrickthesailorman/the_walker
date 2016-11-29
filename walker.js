// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var walkingLeft = true;
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;
var speed = 10;
var xPos = rightBorder;

// The update function is called once every "frame" (via setInterval)
// Changing the walker's position each frame, will cause him to move across the screen
function update() {
  // ensure walker is facing to the right (reverse of "normal")
    // CSS does this for us, we just assign the right class.
//walker.classList.add("flip");

// Move "speed" pixels per iteration:
 //+=walkingLeft ? -speed : speed;
 // Reset back to left side, when we run into right wall
  if(walkingLeft) {
    xPos -= speed;
} else {
  xPos+= speed;
  }
  // reposition the walker
walker.style.left = xPos + "px";
if (xPos < leftBorder || xPos > rightBorder) {
  walker.classList.toggle("flip");
  walkingLeft = !walkingLeft;
  }
};
  // Establish an update interval (framerate)
  // This will call the "update" method every 100ms
  // Add code to "update" to change the walker's position
setInterval(update,100);

// Setup a click handler that manually toggles walker direction:
walker.addEventListener('click', function() {
  walker.classList.toggle('flip');
  walkingLeft = !walkingLeft;
});
// Change right border when resized
window.addEventListener("resize", function() {
  rightBorder = window.innerWidth - walker.offsetWidth;
});
