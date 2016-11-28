// Get the walker image:
var walker = document.getElementById('walker');

// Configure motion params:
var walkingLeft = true;
var leftBorder = 0;
var rightBorder = window.innerWidth - walker.offsetWidth;

var speed = 10;
var xPos = rightBorder;


function update() {
  xPos +=walkingLeft ? -speed : speed;
  if(walkingLeft) {
    xPos -= speed;
} else {
  xPos+= speed;
  }
walker.style.left = xPos + "px";
if (xPos < leftBorder || xPos > rightBorder) {
  walker.classList.toggle("flip");
  walkingLeft = !walkingLeft;
  }
};
setInterval(update,100);

walker.addEventListener('click', function() {
  walker.classList.toggle('flip');
  walkingLeft = !walkingLeft;
});

window.addEventListener("resize", function() {
  rightBorder = window.innerWidth - walker.offsetWidth;
});
