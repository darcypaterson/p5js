function setup() {
  createCanvas(400, 500);
  background("#dddddd");
  stroke("black");
  frameRate(10);
}
function draw() {
  background("#dddddd");
  fill("#8828dc25");
  const squares = [1, 2, 3, 4, 5];
  for (let i = 0; i < squares.length; i++) {
    

    // scale(0.9);
    // const mySquare = rect(10, 10, 380, 380, 5);
    rect(10+ i * 10, 10 + i * 10, 380 - i * 20, 380 - i * 20, 5);

    // console.log(squares[i]);
    
  }
  // rect(10, 400, 380, 90, 5);
}

// function firstInstagram() {

//   background("#94dc28");
//   fill("#0dc75e");
//   for (let i = 0; i < 100; i++) {
//     rect(1 + i * 4, 250, 2, 200);
//   }
//   // fill("#2c0dc7");
//   for (let i = 0; i < 50; i++) {
//     rect(0 + i * 24, 450, 16, 50);
//   }
//   fill("red");
//   circle(50, 50, 100);
//   circle(150, 50, 100);
//   circle(250, 50, 100);
//   circle(350, 50, 100);
//   fill("#0011ff6f");
//   rect(5, 50, 90, 90, 15);
//   rect(105, 50, 90, 90, 15);
//   rect(205, 50, 90, 90, 15);
//   rect(305, 50, 90, 90, 15);
//   fill("black");
//   var x = constrain(mouseX, 0, 100);
//   var y = constrain(mouseY, 100, 200);
//   var randoX = random(0,100);
//   var randoY = random(100,200);
//   circle(randoX, randoY, 15);
//   fill("purple");
//   circle(random(100, 200), random(100, 200), 15);
//   fill("yellow");
//   circle(random(200, 300), random(100, 200), 15);
//    fill("orange");
//   circle(random(300, 400), random(100, 200), 15);
  
// }

// function mousePressed() {
//   if (value[0] === "green") {
//     value[0] = "red";
//   } else {
//     value[0] = "green";
//   }
// }