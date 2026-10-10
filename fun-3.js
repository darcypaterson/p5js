var angle = 0;
var speed = 0.001;

function setup() {
    createCanvas(640, 800);
    rectMode(CENTER);
    stroke(20, 20, 20, 255);
    strokeWeight(2);
}

function draw() {
    background(180);
    for (var i = 0; i < 10; i++) {

        let t = map(
            sin(frameCount * 0.01 + i * 0.5),
            -1,
            1,
            0,
            1
        );
        let r = map(250, 0, 1, 255, 20);
        let g = map(20, 0, 1, 0, 20);
        let b = map(128, 0, 1, 128, 20);

        
        fill(r, g, b, 120);

        console.log(map(10, 0, 120, 0, 255));

        // stroke(20, 20, 20, 255 - i * 25.5);
        // strokeWeight(2);
        angle += speed;
        rect(width/2, height/2, (500 - i * 20) + sin(angle + i * 0.2) * 50, (500 - i * 20) + sin(angle + i * 0.2) * 50);
    }
}