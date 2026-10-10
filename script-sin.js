var mySqaure1;

function setup() {
  createCanvas(400, 500);
  background("#dddddd");
  stroke("#dddddd");
  strokeWeight(1);

  // frameRate(10);
  // noStroke();
  // rectMode(CENTER);
  mySqaure1 = new MySquare(50, 50, 100, 100, "#c800ff11");

}
var angle = 0;
var offset = 60;
var scalar = 40;
var speed = 0.05;

function draw() {
  background("#dddddd");
  mySqaure1.display();
}

function squaresFrontToBackNoRectMode() {
  background("#dddddd");
  for (let i = 0; i < 3; i++) {
    fill("#c800ff11");
    rect(50 + (i * 50), 50 + (i * 50), 300 - (i * 100), 300 - (i * 100));
  }
  fill("#3a3a3a");
  rect(0, 400, 400, 100);
}

function squaresFrontToBack() {
  // this needs rectMode(CENTER) in setup
  background("#dddddd");
  for (let i = 0; i < 4; i++) {
    fill("#c800ff11");
    rect(200, 200, 400 - (i * 100), 400 - (i * 100));
    
  }
  fill("#3a3a3a");
  rect(200, 450, 400, 100)
}

function sqauresBackToFront() {
  // this needs rectMode(CENTER) in setup
  background("#dddddd");
  for (let i = 0; i < 3; i++) {
    fill("#c800ff11");
    rect(200, 200, (i + 1) * 100, (i + 1) * 100);
    
  }
  fill("#3a3a3a");
  rect(200, 450, 400, 100)
}

function primarySecondaryColors() {
    background("#dddddd");
  for (let i = 0; i < 50; i++) {
    fill("green");
    fill("#00aaff");
    var r = rect(150 + i * 2, 150, 1, 50);
    var r = rect(101 + i * 2, 50, 1, 50);
    fill("red");
    var s = rect(101 + i * 2, 100, 1, 100);
    fill("#ffff00");
    var s = rect(150 + i * 2, 50, 1, 100);
  }
}
  function grayscaleWave() {
    fill("#8828dc25");
    var sinval = sin(angle);
    print(sinval);
    var gray = map(sinval, -1, 1, 0, 255);
    background(gray);
    angle += 0.1;
  }

  function movingSineWave() {
    background(0);
    var y1 = offset + sin(angle) * scalar;
    var y2 = offset + sin(angle + 0.4) * scalar;
    var y3 = offset + sin(angle + 0.8) * scalar;
    fill("white");
    ellipse(80, y1, 40);
    ellipse(120, y2, 40);
    ellipse(160, y3, 40);
    angle += speed;
  }

  function movingSineWaveWithTrail() {
    background(0,0,0, 12);
    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;
    fill("white");
    ellipse(x, y, 40);
    angle += speed;
  }

  function movingSineWaveWithSpiral() {
    var x = offset + cos(angle) * scalar;
    var y = offset + sin(angle) * scalar;
    fill("white");
    ellipse(x, y, 40);
    angle += speed;
    scalar += 0.1;
  }


  function MySquare(posX, posY, sqWidth, sqHeight, sqColor) {
    this.x = posX;
    this.y = posY;
    this.width = sqWidth;
    this.height = sqHeight;
    this.color = sqColor;
    
    this.display = function() {
      fill(this.color);
      rect(this.x, this.y, this.width, this.height);
    } 
  }