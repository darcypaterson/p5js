// Trigger timed events.

// var time1 = 2000;
// var time2 = 4000;
// var time3 = 7000;
// var x = 0;

// function setup() {
//   createCanvas(400, 500);
// }

// function draw() {
//  background(color("#dddddd"));
//  var currentTime = millis();
//     if (currentTime > time3) {
//         x = 0;
//     } else if (currentTime > time2) {
//         x -= 0.5;
//     } else if (currentTime > time1) {
//         x += 3;
//     }
//     fill(color("#ff0000"));
//     ellipse(x, 60, 20, 20);
//  }


// Draw random lines wiggle. Cool!

// function setup() {
//   createCanvas(400, 500);
// }

// function draw() {
//  background(color("#dddddd"));
//  for (var x = 20; x < width; x+=20) {
//     var mx = mouseX / 10;
//     var offsetA = random(-mx, mx);
//     var offsetB = random(-mx, mx);
//     stroke(color("#ff0000"));
//     line(x + offsetA, 20, x - offsetB, 100);
//  }
 
// }

// Tweening

var startX = 20;
var startY = 20;
var endX = 380;
var endY = 480;
var step = 0.005;
var pct = 0;
var x = startX;
var y = startY;


function setup() {
  createCanvas(400, 500);
}

function draw() {
 background(color("#dddddd"));
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
    fill(color("#ff0000"));
    ellipse(x, y, 20, 20);
 
}

// pacman moves repeatedly across the canvas

// var radius = 40;
// var x = -radius;
// var speed = 5;


// function setup() {
//   createCanvas(400, 500);
//   background(color("#dddddd"));
//   ellipseMode(RADIUS);

// }

// function draw() {
//  background(color("#dddddd"));
//  x += speed;
//  if (x > width + radius) {
//    x = -radius;
//  }
//  arc(x, 60, radius, radius, 0.52, 5.76);
// }




