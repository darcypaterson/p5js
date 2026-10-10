let speed = 0.025;

  let art1;
  let art2;

function preload() {
  art1 = loadImage("img/art-1.png");
  art2 = loadImage("img/art-2.png");
}

function setup() {
  createCanvas(640, 800);

}

let sw = 2;
function draw() {
  background(230);
  stroke("cyan");
  strokeWeight(sw);
  noFill();



// let x = 50 * sin(frameCount * speed);
// let y = -50 * sin(frameCount * speed);

// image(art1, 80 - x, 0, width, height);
// image(art2, -20 - y, 0, width, height);


let x = sw * sin(frameCount * speed);
let y = -50 * sin(frameCount * speed);

  for (let i = 0; i < 70; i++) {
    stroke("cyan");
    line(60 + (i * 4), 50, 60 + (i * 4), 450);
  }
 
  for (let i = 0; i < 49; i++) {
    stroke("magenta");
    line((0 + sw) + (i * (sw * 2)), 0, (0 + sw) + (i * (sw * 2)), 800);
  }


  // fill("#54ff9b");
  // fill("magenta");
  // noStroke();
  // rect(50, 50, 300, 300, 30);


  

  for (let i = 0; i < 29; i++) {
    stroke("magenta");

    line(40 + (i * 20), 40, 600, 600);
    // console.log(200 - (i * 20));

    line(40, 40, 40 + (i * 20), 600);

    line(40, 40, 600, 40 + (i * 20));

    line(40, 40 + (i * 20), 600, 600);

    fill("pink");
    rect(50, 50, 300 - (i * 6), 300 - (i * 6), 1);
    
  }
}
