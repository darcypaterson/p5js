let img;
let angle = 0;
let speed = 0.01;
let scalar = 400;
let font;

function preload() {
  img = loadImage("./img/maple-leaf@2x.png");
}
function setup() {
  createCanvas(640, 800);
  pixelFactoryLogo = new PixelFactory(380, 750, 0);
  rectMode(CENTER);
}
function draw() {

  let bgcol = map(0, )
  background(230);

  for (let i = 0; i < 10; i++) {
    // let x = width / 2 + cos(angle + i) * scalar;
    // let y = height / 2 + sin(angle + i) * scalar;
    fill(255, 0, 0, 20 + i * 10);
    noStroke();
    rect(
      width / 2,
      320,
      0 + sin(angle + i * 10) * 600,
      0 + sin(angle + i * 20) * 600,
      32,
    );
  }
  fill(205, 0, 0);
  noStroke();
  //   rect(20, 20, 600, 600, 32);
  imageMode(CENTER);
  image(img, width / 2, 320, 560, 560);
  //   fill(30);
  //   text("Happy", 40, 100);
  //   text("Canada", 40, 200);
  //   text("Day!", 40, 300);
  //   textSize(90);

  angle += speed;

    push();
    pixelFactoryLogo.update();
    pixelFactoryLogo.display();
    pop();

    let theNum = sin(angle) * 100;
    // theNum = min(theNum);

    // The angle as text
    fill(30, 30, 30, 250);
    noStroke()
    text(theNum, 20, 780);

    // console.log(theNum);

    //  if (theNum <= -99) {

    //   console.log("it is larger than -99");
      
    // }

}
