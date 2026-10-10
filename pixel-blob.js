var speed = 0.001;
var angle = 0;
var x = 0;
var y = 0;

function Cell(x, y, type) {
  this.x = x;
  this.y = y;

  // Store original position
  this.baseX = x;
  this.baseY = y;

  this.type = type;
  this.c = color(random(255), random(255), random(255));

  this.display = function () {
    fill(this.c);
    noStroke();
    rect(this.x, this.y, 25, 25);
  };
}
function PixelBlob(startX, startY, noiseOffset) {
  this.cells = [];
  this.shadowCells = [];

  const shadowColor = color(0, 0, 0, 50);

  const pattern = [
    "..BBB..",
    ".BBWWB.",
    "BBBBWWB",
    "BBWBWWB",
    "BBBBWWB",
    "BBBBWWB",
    "BBBBWWB",
    "BBBBWWB",
    ".BBWWB.",
    "..BBB..",
  ];

  const colors = {
    ".": color(0, 0, 0, 0),
    B: color(20, 30, 20, 255),
    W: color(230, 235, 245, 255),
  };

  for (let row = 0; row < pattern.length; row++) {
    for (let col = 0; col < pattern[row].length; col++) {

      let cell = new Cell(
        startX + col * 25,
        startY + row * 25,
        pattern[row][col]
      );

      cell.c = colors[pattern[row][col]];
      this.cells.push(cell);

      let shadowCell = new Cell(
        startX + col * 25 + 10,
        startY + row * 25 + 10,
        pattern[row][col]
      );

      shadowCell.c =
        pattern[row][col] !== "."
          ? shadowColor
          : color(0, 0, 0, 0);

      this.shadowCells.push(shadowCell);
    }
  }

  this.update = function () {

    for (let i = 0; i < this.cells.length; i++) {

      let xOffset = map(
        noise(noiseOffset + i * 100 + frameCount * 0.01),
        0,
        1,
        -7,
        7
      );

      let yOffset = map(
        noise(noiseOffset + i * 100 + frameCount * 0.01),
        0,
        1,
        -7,
        7
      );

      this.cells[i].x = this.cells[i].baseX + xOffset;
      this.cells[i].y = this.cells[i].baseY + yOffset;

      this.shadowCells[i].x = this.cells[i].x + 10;
      this.shadowCells[i].y = this.cells[i].y + 10;

      if (this.cells[i].type === ".") {

        let a = map(
          noise(noiseOffset + frameCount * 0.05 + i),
          0,
          1,
          20,
          50
        );

        this.cells[i].c = color(0, 0, 0, a);
      }

      if (this.cells[i].type === "B") {

        let b = map(
          noise(noiseOffset + frameCount * 0.05 + i),
          0,
          1,
          0,
          70
        );

        this.cells[i].c = color(b, b, b, 255);
      }

      if (this.cells[i].type === "W") {

        let w = map(
          noise(noiseOffset + frameCount * 0.05 + i),
          0,
          1,
          180,
          255
        );

        this.cells[i].c = color(w, w, w, 255);
      }
    }
  };

  this.display = function () {

    for (let shadowCell of this.shadowCells) {
      shadowCell.display();
    }

    for (let cell of this.cells) {
      cell.display();
    }
  };
}

function multiSquare() {
  push();
  x = width / 2;
  y = height / 2;
  for (var i = 0; i < 10; i++) {
    fill("#b0d7c92b");
    stroke(250, 250, 250, 250);
    strokeWeight(1);
    angle += speed;
    rect(x, x, 380 - i * 20, 380 - i * 20, 5);
    translate(0 + sin(angle) * 10, 0 + cos(angle) * 10);
  }
  pop();
}

let cells = [];
let shadowCells = [];

let img;
let smile;

function preload() {
  img = loadImage("./img/nose-3.webp");
  smile = loadImage("./img/smile.png");
}

function setup() {
  createCanvas(640, 800);
  rectMode(CENTER);

  const shadowColor = color(0, 0, 0, 50);

  

  leftBlob = new PixelBlob(120, 150, 0);
  rightBlob = new PixelBlob(360, 150, 10000);

}


function draw() {
  background("#f3f3f3");
  
  understandMap();

noStroke();
tint(255, 100);
image(smile, 100, 500, width - 180, 280);

tint(255, 255);
for (let r = 240; r > 0; r--) {

  let t = r / 240;

  fill(
    255,
    180,
    180,
    25 * (1 - t * t)
  );
  

  ellipse(120, 420, r, r);
  ellipse(520, 420, r, r);
}

  leftBlob.update();
  leftBlob.display();

  image(img, 120, 200, 400, 400);
  

  rightBlob.update();
  rightBlob.display();

}

function coolGridThing() {
  for (let i = 0; i < cells.length; i++) {
    let t = map(
      sin(frameCount * 0.01 + i * 0.5),
      -1,
      1,
      0,
      1
    );
    let r = map(t, 0, 1, 25, 10);
    let g = map(t, 0, 1, 120, 30);
    let b = map(t, 0, 1, 120, 30);

    console.log(t);

    cells[i].c = color(r, g, b, 255);
  }
}

function understandMap() {
  let t = map(
    sin(frameCount * 0.01),
    -1,
    1,
    0,
    1
  );
  let r = map(t, 0, 1, 25, 10);
  let g = map(t, 0, 1, 120, 30);
  let b = map(t, 0, 1, 120, 30);

  



  for (i = 0; i < 10; i++) {
    let smallR = map(0 + i * 0.1, 0, 1, 255, 0);
    fill(smallR, 120, 120, 255);
    rect(50 + i * 60, 50, 60, 60);
  }

  
}

