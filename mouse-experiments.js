let circles = [];

function setup() {
  createCanvas(800, 400);

  // Create circles across the canvas
  for (let x = 100; x < width; x += 100) {
    circles.push({
      x: x,
      y: height / 2,
      baseSize: 40,
      maxSize: 140
    });
  }
}

function draw() {
  background(30);

  noStroke();

  // Loop through every circle
  for (let circle of circles) {

    // Distance from mouse to current circle
    let d = dist(mouseX, mouseY, circle.x, circle.y);

    // Scale based on distance
    let size = map(
      d,
      0,
      width / 3,
      circle.maxSize,
      circle.baseSize
    );

    // Keep size within limits
    size = constrain(size, circle.baseSize, circle.maxSize);

    fill(100, 200, 255);

    ellipse(circle.x, circle.y, size, size);
  }
}