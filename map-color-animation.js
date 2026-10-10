var angle = 0;
var offset = 60;
var scalar = 50;
var speed = 0.05;

function setup() {
    createCanvas(400, 500);
    rectMode(CENTER);
    noStroke();
    filter(BLUR, 3, false);
}

function draw() {
    background(220);
    // makeRectangles();
    movingSineWave();
    // conCircle();
}

function makeRectangles() {

    let steps = 5;

    let widths = [200];
    let heights = [200];

    
    var lookX = mouseX;
    var lookY = mouseY;

    

    for (let i = 0; i < steps; i++) {
        widths.push(widths[i] * (5/6));
        heights.push(heights[i] * (5/6));
    }

    for (let i = 0; i < widths.length; i++) {

        

        let t = map(
            sin(frameCount * 0.02 + i * 0.5),
            -1,
            1,
            0,
            1
        );

        let r = map(t, 0, 1, 255, 20);
        let g = map(t, 0, 1, 0, 20);
        let b = map(t, 0, 1, 128, 20);

        fill(r, g, b, 120);

        // Constraint offset shrinks by 20px each step
        let offset = 200;
        var y1 = widths[i] + sin(angle * i + 0.4) * scalar;

        let x = constrain(
            mouseX,
            offset,
            width - offset
        );

        let y = y1;

        rect(
            x,
            y,
            widths[i],
            heights[i],
            30 + (widths[i] * (5/6))
        );

        
    }
    angle += speed;
}

 function movingSineWave() {

    var y1 = offset + sin(angle) * scalar;
    var y2 = offset + sin(angle + 0.4) * scalar;
    var y3 = offset + sin(angle + 0.8) * scalar;
    angle += speed;

    for (let i = 0; i < 5; i++) {
        fill(120, 30, 200, 5 + (i * 50));
        ellipse(200 + sin(angle + (i * 0.8)) * scalar, 250, (i * 20));
    }

  }


  function conCircle() {

    circleX = random(0, width);
    circleY = random(0, height);

    for (let i = 0; i < 5; i++) {

        stroke(120, 30, 200, 255);
        strokeWeight(2);
        noFill();
        ellipse(circleX - i * 20, circleY, 20);

    }

  }