let angle = 0;
let speed = 0.01;
function setup() {
    createCanvas(640, 800);
    rectMode(CENTER);
    ellipseMode(CENTER);

}

function draw() {
    // let eye = new Eye(320, 400, 50, color(255, 200, 200));
    // eye.display();
    background(220, 220, 220);
    fill(232, 240, 250);
    noStroke();
    rect(320, 320, 600, 600, 16);
    stroke(10, 30, 180);
    strokeWeight(2);
    let face = new Face(
        width, // x
        100, // y
        500, // width
        100, // height
        color(200, 200, 230), // color 
        10 // radius
        );
    face.display();
    angle += speed;

    line(170, 20, 170, 400);
    line(320, 20, 320, 400);
    line(470, 20, 470, 400);

    line(20, 420, 320, 420); // long line
    line(170, 200, 320, 200); // short line
    line(245, 180, 320, 180); // half short line

    fill(80, 180, 200, 180);
    rect(245, 300, 150, 150, 10);
    }