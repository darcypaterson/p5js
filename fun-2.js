

function ArmyPattern() {
  // Army Pattern
  for (let i = 0; i < 20; i++) {
      line(200, 250 + i * 10, width - 20, 300 + i * 10);
      line(20, 300 + i * 10, width - 200, 250 + i * 10);
  }
}

function Nose(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // fill(222,30,65);
    this.display = function() {
        rect(this.x, this.y, this.w, this.h, 10);
        circle(this.x - 20, this.y + 20, this.w);
        circle(this.x + 20, this.y + 20, this.w);
    }
}

function Mouth(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // fill(222,30,65);
    this.display = function() {
        // rect(this.x, this.y, this.w, this.h, 10);
        // rect(this.x, this.y + 50, this.w, this.h, 10);
        // circle(this.x - 20, this.y + 20, this.w);
        // circle(this.x + 20, this.y + 20, this.w);
        let steps = 5;
        for (let i = 0; i < steps; i++) {
            let r = map(i, 0, steps - 1, 255, 50);
            let g = map(i, 0, steps - 1, 0, 50);
            let b = map(i, 0, steps - 1, 128, 50);
            fill(r, g, b);
            rect(
                constrain(
                    mouseX, 
                    this.x - ((2 * i)), 
                    this.x + ((2 * i))
                ), 
                constrain(
                    mouseY, 
                    this.y - ((10 * i)), 
                    this.y + ((1 * i))
                ), 
                this.w - (i * 40), 
                this.h - (i * 40),
                0 + (i * 5)
            );
        }
    }
}

function Pupil(x, y, size) {
    
    this.x = x;
    this.y = y;
    this.size = size;

    this.display = function() {
        // fill(0);
        rect(
            constrain(
                mouseX, 
                this.x - (this.size / 5), 
                this.x + (this.size / 5)
            ), 
            constrain(
                mouseY, 
                this.y - (this.size / 5), 
                this.y + (this.size / 5)
            ), 
            this.size / 2, 
            this.size / 2
        );
    }
}

function Eye(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    // let pupilBig = new Pupil(this.x, this.y, this.w);
    // let pupilSmall = new Pupil(this.x, this.y, this.w / 2);

    // this.pupil = new Pupil(this.x, this.y, this.w);

    this.display = function() {
        // stroke(230,10,230, 30);
        


        // strokeWeight(4);
        noStroke();
        // fill(255);
        // rect(this.x, this.y, this.w, this.h, 10);
        // fill(0);
        // pupilBig.display();
        // pupilSmall.display();
        // rect(constrain(mouseX, this.x - 40, this.x + 40), constrain(mouseY, this.y - 40, this.y + 40), this.w / 3, this.w / 3);
        // rect(constrain(mouseX, this.x - 60, this.x + 60), constrain(mouseY, this.y - 60, this.y + 60), this.w / 6, this.w / 6);
        var steps = 6;
        for (let i = 0; i < steps; i++) {
            // let r = map(i, 0, steps - 1, 0, 50);
            // let g = map(i, 0, steps - 1, 255, 50);
            // let b = map(i, 0, steps - 1, 0, 50);
            // fill(r, g, b);
            var zero = 0;
            var one = 255;
            var fillValue = map(i, zero, steps-1, zero, one);
            fill(fillValue, 255 - fillValue, fillValue / 2);

            rect(
                constrain(
                    mouseX, 
                    this.x - ((5.5 * i)), 
                    this.x + ((5.5 * i))
                ), 
                constrain(
                    mouseY, 
                    this.y - ((5 * i)), 
                    this.y + ((10 * i))
                ), 
                this.w - (i * 3), 
                this.h - (i * 3),
                25 - (i * 5)
            );
            
        }
    }
    // this.scale = function(factor) {
    //     this.w *= factor;
    // }
}



// function scaleEye(eye, factor) {
//     eye.size *= factor;
// }

var startX = 20;
var startY = 20;
var endX = 380;
var endY = 480;
var step = 0.005;
var pct = 0;
var x = startX;
var y = startY;



function elephantNose() {
    
    var steps = 10;
    for (let i = 0; i < steps; i++) {

        let r = map(i, 0, steps - 1, 255, 255);
        let g = map(i, 0, steps - 1, 0, 0);
        let b = map(i, 0, steps - 1, 128, 128);

        fill(r, g, b, 180 - (i * 15));
        stroke(255, 255, 255, 180);
        strokeWeight(2);

        circle(
            constrain(
                mouseX, 
                100 - ((5.5 * i)), 
                100 + ((5.5 * i))
            ), 
            constrain(
                mouseY, 
                120 - ((5.5 * i)), 
                120 + ((5.5 * i))
            ), 
            100 - i * 4
        );
    }
}

function ElephantNoseTwo(x, y) {
    this.x = x;
    this.y = y;
  
    this.display = function() {

        var steps = 10;
        for (let i = 0; i < steps; i++) {

            let r = map(i, 0, steps - 1, 255, 255);
            let g = map(i, 0, steps - 1, 0, 0);
            let b = map(i, 0, steps - 1, 128, 128);

            fill(r, g, b, 180 - (i * 15));
            stroke(255, 255, 255, 180);
            strokeWeight(2);

        
            circle(
                constrain(
                    mouseX, 
                    this.x - ((5.5 * i)), 
                    this.x + ((5.5 * i))
                ), 
                constrain(
                    mouseY, 
                    this.y - ((5.5 * i)), 
                    this.y + ((5.5 * i))
                ), 
                100 - i * 4
            );
        }
  
    }
}



function star(x, y, innerRadius, outerRadius, points) {
  let angle = TWO_PI / points;
  let halfAngle = angle / 2;

  beginShape();

  for (let a = 0; a < TWO_PI; a += angle) {

    // Outer point
    let sx = x + cos(a) * outerRadius;
    let sy = y + sin(a) * outerRadius;
    vertex(sx, sy);

    // Inner point
    sx = x + cos(a + halfAngle) * innerRadius;
    sy = y + sin(a + halfAngle) * innerRadius;
    vertex(sx, sy);
  }
    // stroke(255, 255, 255, 255);
    fill(255, 230, 250, 205);
    endShape(CLOSE);
}

function goSquare() {
    if (pct < 1) {
        x = startX + (endX - startX) * pct;
        y = startY;
        pct += step;
    } else if (pct < 2) {
        x = endX;
        y = startY + (endY - startY) * (pct - 1);
        pct += step;
    } else if (pct < 3) {
        x = endX - (endX - startX) * (pct - 2);
        y = endY;
        pct += step;
    } else if (pct < 4) {
        x = startX;
        y = endY - (endY - startY) * (pct - 3);
        pct += step;
    } else {
        pct = 0;
    }

    return [x, y];
    
}

var angle = 0;
var offset = 200;
var scalar = 170;
var speed = 0.005;

function goCircle() {
    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;
    angle += speed;
    // console.log("angle: " + angle, "x: " + x, "y: " + y);
    // ellipse(x, y, 20, 20);
    // noStroke();
    // fill(255, 255, 0, 180);
    // star(x, y, 20, 40, 5);
    // fill(255,230,250,205);
    star(x, y, 15, 30, 5);
    return [x, y];
}

var num = 0;
var increasing = true;
function makeBig() {
    if (increasing) {
    num+= 0.1;

    if (num >= 400) {
      increasing = false;
    }
  } else {
    num-= 0.1;

    if (num <= 0) {
      increasing = true;
    }
  }
    // console.log(num);
    return num;
}

var numTwo = 200;
function makeSmall() {
    if (increasing) {
    numTwo+= 0.1;

    if (numTwo >= 800) {
      increasing = false;
    }
  } else {
    numTwo-= 0.1;

    if (numTwo <= 0) {
      increasing = true;
    }
  }
    // console.log(numTwo);
    return numTwo;
}

var numThree = 100;
function moveToSide() {
    if (numThree >= 0 && numThree < 400) {
        numThree++;
    } else {
        numThree = 0;
    }
    // return numThree;
    // console.log("numThree: " + numThree);
}

let eye1 = new Eye(102.5, 100, 120, 120);
let eye2 = new Eye(297.5, 100, 120, 120);
// let nose1 = new Nose(200, 200, 20, 60);
let mouth1 = new Mouth(200, 350, 310, 200);
let elephantNoseTwo = new ElephantNoseTwo(200, 250);
let elephantNoseOne = new ElephantNoseTwo(100, 200);

function setup() {
    createCanvas(640, 800);
    rectMode(CENTER);
}

function draw() {

    background(180);
    elephantNose();
    elephantNoseTwo.display();
    elephantNoseOne.display();

}


function elephantNose() {
    
    var steps = 10;
    for (let i = 0; i < steps; i++) {

        let r = map(i, 0, steps - 1, 255, 255);
        let g = map(i, 0, steps - 1, 0, 0);
        let b = map(i, 0, steps - 1, 128, 128);

        fill(r, g, b, 180 - (i * 15));
        stroke(255, 255, 255, 180);
        strokeWeight(2);

        circle(
            constrain(
                mouseX, 
                100 - ((5.5 * i)), 
                100 + ((5.5 * i))
            ), 
            constrain(
                mouseY, 
                120 - ((5.5 * i)), 
                120 + ((5.5 * i))
            ), 
            100 - i * 4
        );
    }
}